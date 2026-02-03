import { SubmissionStatus } from '@/common/enums';
import { Participant } from '@/modules/participants/entities/participant.entity';
import { ParticipationCategory } from '@/modules/utilities/entities/participation-category.entity';
import { ContentCategory } from '@/modules/utilities/entities/content-category.entity';
export declare class Submission {
    id: number;
    participationCategoryId: number;
    participationCategory: ParticipationCategory;
    contentCategoryId: number;
    contentCategory: ContentCategory;
    contentUrl: string;
    status: SubmissionStatus;
    participantId: number;
    participant: Participant;
    createdAt: Date;
    updatedAt: Date;
}
