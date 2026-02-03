import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateParticipantsTable1770056076444 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
