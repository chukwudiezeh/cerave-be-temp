import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Voter } from './entities/voter.entity';
import { CreateVoterDto } from './dto';
import { NotificationService } from '@/modules/notifications/notification.service';

@Injectable()
export class VoterService {
  constructor(
    @InjectRepository(Voter)
    private readonly voterRepository: Repository<Voter>,
    private readonly notificationService: NotificationService,
  ) {}

  private generateOtp(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  private async sendOtpEmail(email: string, otp: string): Promise<void> {
    await this.notificationService.sendEmailNotification({
      recipient: email,
      subject: 'Your Verification Code - CeraVe Voting',
      template: 'voter_otp',
      params: { otp },
    });
  }

  async create(createVoterDto: CreateVoterDto): Promise<{ message: string }> {
    const { email } = createVoterDto;
    const normalizedEmail = email.toLowerCase();

    const existingVoter = await this.voterRepository.findOne({
      where: { email: normalizedEmail },
    });

    if (existingVoter) {
      if (existingVoter.emailVerified) {
        throw new ConflictException('This email is already verified');
      }

      const otp = this.generateOtp();
      // TODO: Store OTP in cache/db for verification
      await this.sendOtpEmail(normalizedEmail, otp);

      return { message: 'Verification code resent to your email' };
    }

    const voter = this.voterRepository.create({
      email: normalizedEmail,
    });

    await this.voterRepository.save(voter);

    const otp = this.generateOtp();
    // TODO: Store OTP in cache/db for verification
    await this.sendOtpEmail(normalizedEmail, otp);

    return { message: 'Verification code sent to your email' };
  }
}
