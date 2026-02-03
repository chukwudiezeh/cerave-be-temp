import { VoterService } from './voter.service';
import { CreateVoterDto } from './dto';
export declare class VoterController {
    private readonly voterService;
    constructor(voterService: VoterService);
    create(createVoterDto: CreateVoterDto): Promise<{
        message: string;
    }>;
}
