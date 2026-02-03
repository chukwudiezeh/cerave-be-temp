import { ParticipantService } from './participant.service';
import { GetParticipantDto } from './dto';
export declare class ParticipantController {
    private readonly participantService;
    constructor(participantService: ParticipantService);
    getParticipant(query: GetParticipantDto): Promise<import("./entities/participant.entity").Participant | null>;
}
