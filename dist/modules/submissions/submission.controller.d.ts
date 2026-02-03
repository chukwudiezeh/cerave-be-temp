import { SubmissionService } from './submission.service';
import { CreateSubmissionDto } from './dto';
export declare class SubmissionController {
    private readonly submissionService;
    constructor(submissionService: SubmissionService);
    create(createSubmissionDto: CreateSubmissionDto): Promise<{
        participant: import("../participants/entities/participant.entity").Participant;
        submissions: import("./entities/submission.entity").Submission[];
    }>;
}
