export declare class SubmissionItemDto {
    participationCategoryId: number;
    contentCategoryId: number;
    contentUrl: string;
}
export declare class CreateSubmissionDto {
    firstname: string;
    surname: string;
    email: string;
    mobile: string;
    address?: string;
    submissions: SubmissionItemDto[];
}
