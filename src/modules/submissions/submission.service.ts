import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { Submission } from './entities/submission.entity';
import { Participant } from '@/modules/participants/entities/participant.entity';
import { CreateSubmissionDto } from './dto';

@Injectable()
export class SubmissionService {
  constructor(
    @InjectRepository(Submission)
    private readonly submissionRepository: Repository<Submission>,
    @InjectRepository(Participant)
    private readonly participantRepository: Repository<Participant>,
    private readonly dataSource: DataSource,
  ) {}

  async create(createSubmissionDto: CreateSubmissionDto): Promise<Submission> {
    const {
      firstname,
      surname,
      email,
      mobile,
      address,
      participationCategoryId,
      contentCategoryId,
      contentUrl,
    } = createSubmissionDto;

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

      const submission = transactionManager.create(Submission, {
        participantId: participant.id,
        participationCategoryId,
        contentCategoryId,
        contentUrl,
      });

      return await transactionManager.save(Submission, submission);
    });
  }
}
