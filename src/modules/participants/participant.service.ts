import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Participant } from './entities/participant.entity';

@Injectable()
export class ParticipantService {
  constructor(
    @InjectRepository(Participant)
    private readonly participantRepository: Repository<Participant>,
  ) {}

  async findByEmail(email: string): Promise<Participant | null> {
    return this.participantRepository.findOne({
      where: { email: email.toLowerCase() },
    });
  }
}
