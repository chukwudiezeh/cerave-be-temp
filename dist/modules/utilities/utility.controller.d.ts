import { UtilityService } from './utility.service';
export declare class UtilityController {
    private readonly utilityService;
    constructor(utilityService: UtilityService);
    getContentCategories(): Promise<import("./entities/content-category.entity").ContentCategory[]>;
    getParticipationCategories(): Promise<import("./entities/participation-category.entity").ParticipationCategory[]>;
    getSettings(): Promise<import("./entities/setting.entity").Setting[]>;
}
