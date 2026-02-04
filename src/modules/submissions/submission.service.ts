import { Injectable, ConflictException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { Submission } from './entities/submission.entity';
import { Participant } from '@/modules/participants/entities/participant.entity';
import { CreateSubmissionDto, SubmissionItemDto } from './dto';
import { NotificationService } from '@/modules/notifications/notification.service';

@Injectable()
export class SubmissionService {
  constructor(
    @InjectRepository(Submission)
    private readonly submissionRepository: Repository<Submission>,
    @InjectRepository(Participant)
    private readonly participantRepository: Repository<Participant>,
    private readonly dataSource: DataSource,
    private readonly notificationService: NotificationService,
  ) {}

  async create(createSubmissionDto: CreateSubmissionDto): Promise<{ participant: Participant; submissions: Submission[] }> {
    const { firstname, surname, email, mobile, address, submissions } = createSubmissionDto;

    this.validateUniqueSubmissions(submissions);

    return await this.dataSource.transaction(async (transactionManager) => {
      let participant = await transactionManager.findOne(Participant, {
        where: { email: email.toLowerCase() },
      });

      if (!participant) {
        participant = transactionManager.create(Participant, {
          firstname,
          surname,
          email: email.toLowerCase(),
          mobile,
          address,
        });
        participant = await transactionManager.save(Participant, participant);
      }

      const savedSubmissions: Submission[] = [];
      const duplicates: string[] = [];

      for (const item of submissions) {
        const existingSubmission = await transactionManager.findOne(Submission, {
          where: {
            participantId: participant.id,
            participationCategoryId: item.participationCategoryId,
            contentCategoryId: item.contentCategoryId,
          },
        });

        if (existingSubmission) {
          duplicates.push(`Participation: ${item.participationCategoryId}, Content: ${item.contentCategoryId}`);
          continue;
        }

        const submission = transactionManager.create(Submission, {
          participantId: participant.id,
          participationCategoryId: item.participationCategoryId,
          contentCategoryId: item.contentCategoryId,
          contentUrl: item.contentUrl,
        });

        const saved = await transactionManager.save(Submission, submission);
        savedSubmissions.push(saved);
      }

      if (savedSubmissions.length === 0) {
        throw new ConflictException('All submissions already exist for this participant');
      }

      await this.notificationService.sendEmailNotification({
        recipient: email.toLowerCase(),
        subject: 'Submission Received - Cera Awards',
        template: 'generic',
        params: {
          body: `<p>Dear ${firstname} ${surname},</p>
                 <p>Thank you for your submission!</p>
                 <p>We received ${savedSubmissions.length} submission(s). They are now under review.</p>
                 ${duplicates.length > 0 ? `<p>Note: ${duplicates.length} duplicate submission(s) were skipped.</p>` : ''}`,
        },
      });

      return { participant, submissions: savedSubmissions };
    });
  }

  private validateUniqueSubmissions(submissions: SubmissionItemDto[]): void {
    const seen = new Set<string>();

    for (const item of submissions) {
      const key = `${item.participationCategoryId}-${item.contentCategoryId}`;
      if (seen.has(key)) {
        throw new BadRequestException(
          `Duplicate submission in request: Participation category ${item.participationCategoryId} with content category ${item.contentCategoryId}`
        );
      }
      seen.add(key);
    }
  }
}
