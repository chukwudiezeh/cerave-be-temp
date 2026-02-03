import { Controller, Get, Query } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { GetParticipantDto } from './dto';

@Controller('participants')
export class ParticipantController {
  constructor(private readonly participantService: ParticipantService) {}

  @Get('')
  async getParticipant(@Query() query: GetParticipantDto) {
    return await this.participantService.findByEmail(query.email);
  }
}
