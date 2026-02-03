import { Repository } from 'typeorm';
import { Voter } from './entities/voter.entity';
import { CreateVoterDto } from './dto';
import { NotificationService } from '@/modules/notifications/notification.service';
export declare class VoterService {
    private readonly voterRepository;
    private readonly notificationService;
    constructor(voterRepository: Repository<Voter>, notificationService: NotificationService);
    private generateOtp;
    private sendOtpEmail;
    create(createVoterDto: CreateVoterDto): Promise<{
        message: string;
    }>;
}
