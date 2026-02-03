import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilityController } from './utility.controller';
import { UtilityService } from './utility.service';
import { ContentCategory } from './entities/content-category.entity';
import { ParticipationCategory } from './entities/participation-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContentCategory, ParticipationCategory])],
  controllers: [UtilityController],
  providers: [UtilityService],
  exports: [UtilityService],
})
export class UtilityModule {}
