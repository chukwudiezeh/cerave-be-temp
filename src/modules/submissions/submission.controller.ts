import { Controller, Post, Body } from '@nestjs/common';
import { SubmissionService } from './submission.service';
import { CreateSubmissionDto } from './dto';

@Controller('submissions')
export class SubmissionController {
  constructor(private readonly submissionService: SubmissionService) {}

  @Post('create')
  async create(@Body() createSubmissionDto: CreateSubmissionDto) {
    return await this.submissionService.create(createSubmissionDto);
  }
}
