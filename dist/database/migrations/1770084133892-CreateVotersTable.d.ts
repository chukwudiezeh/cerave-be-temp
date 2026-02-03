import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateVotersTable1770084133892 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
