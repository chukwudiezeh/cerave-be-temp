import { Repository, DataSource } from 'typeorm';
import { Submission } from './entities/submission.entity';
import { Participant } from '@/modules/participants/entities/participant.entity';
import { CreateSubmissionDto } from './dto';
import { NotificationService } from '@/modules/notifications/notification.service';
export declare class SubmissionService {
    private readonly submissionRepository;
    private readonly participantRepository;
    private readonly dataSource;
    private readonly notificationService;
    constructor(submissionRepository: Repository<Submission>, participantRepository: Repository<Participant>, dataSource: DataSource, notificationService: NotificationService);
    create(createSubmissionDto: CreateSubmissionDto): Promise<{
        participant: Participant;
        submissions: Submission[];
    }>;
    private validateUniqueSubmissions;
}
