import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateUtilityTables1770053022173 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
