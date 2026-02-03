import { Controller, Post, Body } from '@nestjs/common';
import { VoterService } from './voter.service';
import { CreateVoterDto } from './dto';

@Controller('voters')
export class VoterController {
  constructor(private readonly voterService: VoterService) {}

  @Post()
  async create(@Body() createVoterDto: CreateVoterDto) {
    return await this.voterService.create(createVoterDto);
  }
}
