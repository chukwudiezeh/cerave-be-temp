"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmissionsTable1770057517303 = void 0;
class SubmissionsTable1770057517303 {
    name = 'SubmissionsTable1770057517303';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`submissions\` (\`id\` int NOT NULL AUTO_INCREMENT, \`participation_category_id\` int NOT NULL, \`content_category_id\` int NOT NULL, \`content_url\` varchar(500) NOT NULL, \`status\` enum ('pending', 'approved', 'rejected') NOT NULL DEFAULT 'pending', \`participant_id\` int NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`participants\` CHANGE \`address\` \`address\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`submissions\` ADD CONSTRAINT \`FK_aa41ca9d2ad9f17bac7fc0afe48\` FOREIGN KEY (\`participation_category_id\`) REFERENCES \`participation_categories\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`submissions\` ADD CONSTRAINT \`FK_74886f68390302c8829b13ddb5e\` FOREIGN KEY (\`content_category_id\`) REFERENCES \`content_categories\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`submissions\` ADD CONSTRAINT \`FK_6a4e4d77ba758803a18b44f1a8b\` FOREIGN KEY (\`participant_id\`) REFERENCES \`participants\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`submissions\` DROP FOREIGN KEY \`FK_6a4e4d77ba758803a18b44f1a8b\``);
        await queryRunner.query(`ALTER TABLE \`submissions\` DROP FOREIGN KEY \`FK_74886f68390302c8829b13ddb5e\``);
        await queryRunner.query(`ALTER TABLE \`submissions\` DROP FOREIGN KEY \`FK_aa41ca9d2ad9f17bac7fc0afe48\``);
        await queryRunner.query(`ALTER TABLE \`participants\` CHANGE \`address\` \`address\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`DROP TABLE \`submissions\``);
    }
}
exports.SubmissionsTable1770057517303 = SubmissionsTable1770057517303;
//# sourceMappingURL=1770057517303-SubmissionsTable.js.map