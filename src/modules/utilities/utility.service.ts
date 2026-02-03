import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContentCategory } from './entities/content-category.entity';
import { ParticipationCategory } from './entities/participation-category.entity';

@Injectable()
export class UtilityService {
  constructor(
    @InjectRepository(ContentCategory)
    private readonly contentCategoryRepository: Repository<ContentCategory>,
    
    @InjectRepository(ParticipationCategory)
    private readonly participationCategoryRepository: Repository<ParticipationCategory>,
  ) {}

  async findAllContentCategories(): Promise<ContentCategory[]> {
    return this.contentCategoryRepository.find();
  }

  async findAllParticipationCategories(): Promise<ParticipationCategory[]> {
    return this.participationCategoryRepository.find();
  }
}
