"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateParticipantsTable1770056076444 = void 0;
class CreateParticipantsTable1770056076444 {
    name = 'CreateParticipantsTable1770056076444';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`participants\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstname\` varchar(100) NOT NULL, \`surname\` varchar(100) NOT NULL, \`email\` varchar(255) NOT NULL, \`mobile\` varchar(20) NOT NULL, \`address\` text NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_b77ad0832a0f8ec526c1f40a84\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX \`IDX_b77ad0832a0f8ec526c1f40a84\` ON \`participants\``);
        await queryRunner.query(`DROP TABLE \`participants\``);
    }
}
exports.CreateParticipantsTable1770056076444 = CreateParticipantsTable1770056076444;
//# sourceMappingURL=1770056076444-CreateParticipantsTable.js.map