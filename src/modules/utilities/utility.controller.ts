import { Controller, Get } from '@nestjs/common';
import { UtilityService } from './utility.service';

@Controller('utilities')
export class UtilityController {
  constructor(private readonly utilityService: UtilityService) {}

  @Get('content-categories')
  async getContentCategories() {
    return await this.utilityService.findAllContentCategories();
  }

  @Get('participation-categories')
  async getParticipationCategories() {
    return await this.utilityService.findAllParticipationCategories();
  }
}
