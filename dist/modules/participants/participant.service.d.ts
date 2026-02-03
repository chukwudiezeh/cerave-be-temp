import { Repository } from 'typeorm';
import { Participant } from './entities/participant.entity';
export declare class ParticipantService {
    private readonly participantRepository;
    constructor(participantRepository: Repository<Participant>);
    findByEmail(email: string): Promise<Participant | null>;
}
