import { Repository } from 'typeorm';
import { ContentCategory } from './entities/content-category.entity';
import { ParticipationCategory } from './entities/participation-category.entity';
import { Setting } from './entities/setting.entity';
export declare class UtilityService {
    private readonly contentCategoryRepository;
    private readonly participationCategoryRepository;
    private readonly settingRepository;
    constructor(contentCategoryRepository: Repository<ContentCategory>, participationCategoryRepository: Repository<ParticipationCategory>, settingRepository: Repository<Setting>);
    findAllContentCategories(): Promise<ContentCategory[]>;
    findAllParticipationCategories(): Promise<ParticipationCategory[]>;
    findAllSettings(): Promise<Setting[]>;
}
