"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVotersTable1770084133892 = void 0;
class CreateVotersTable1770084133892 {
    name = 'CreateVotersTable1770084133892';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`voters\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255) NOT NULL, \`email_verified\` tinyint NOT NULL DEFAULT 0, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_52c4af0d6cf51230fecc86d98b\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`participants\` CHANGE \`address\` \`address\` text NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`participants\` CHANGE \`address\` \`address\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`DROP INDEX \`IDX_52c4af0d6cf51230fecc86d98b\` ON \`voters\``);
        await queryRunner.query(`DROP TABLE \`voters\``);
    }
}
exports.CreateVotersTable1770084133892 = CreateVotersTable1770084133892;
//# sourceMappingURL=1770084133892-CreateVotersTable.js.map