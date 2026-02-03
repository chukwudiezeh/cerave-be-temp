import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContentCategory } from './entities/content-category.entity';
import { ParticipationCategory } from './entities/participation-category.entity';
import { Setting } from './entities/setting.entity';

@Injectable()
export class UtilityService {
  constructor(
    @InjectRepository(ContentCategory)
    private readonly contentCategoryRepository: Repository<ContentCategory>,
    
    @InjectRepository(ParticipationCategory)
    private readonly participationCategoryRepository: Repository<ParticipationCategory>,

    @InjectRepository(Setting)
    private readonly settingRepository: Repository<Setting>,
  ) {}

  async findAllContentCategories(): Promise<ContentCategory[]> {
    return this.contentCategoryRepository.find();
  }

  async findAllParticipationCategories(): Promise<ParticipationCategory[]> {
    return this.participationCategoryRepository.find();
  }

  async findAllSettings(): Promise<Setting[]> {
    return this.settingRepository.find();
  }
}
