import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateParticipantsTable1770056076444 implements MigrationInterface {
    name = 'CreateParticipantsTable1770056076444'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`participants\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstname\` varchar(100) NOT NULL, \`surname\` varchar(100) NOT NULL, \`email\` varchar(255) NOT NULL, \`mobile\` varchar(20) NOT NULL, \`address\` text NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_b77ad0832a0f8ec526c1f40a84\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_b77ad0832a0f8ec526c1f40a84\` ON \`participants\``);
        await queryRunner.query(`DROP TABLE \`participants\``);
    }

}
