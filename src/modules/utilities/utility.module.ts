import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilityController } from './utility.controller';
import { UtilityService } from './utility.service';
import { ContentCategory } from './entities/content-category.entity';
import { ParticipationCategory } from './entities/participation-category.entity';
import { Setting } from './entities/setting.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContentCategory, ParticipationCategory, Setting])],
  controllers: [UtilityController],
  providers: [UtilityService],
  exports: [UtilityService],
})
export class UtilityModule {}
