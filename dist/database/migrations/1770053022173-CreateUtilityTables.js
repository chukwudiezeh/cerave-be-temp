"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUtilityTables1770053022173 = void 0;
class CreateUtilityTables1770053022173 {
    name = 'CreateUtilityTables1770053022173';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`content_categories\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`status\` enum ('active', 'inactive') NOT NULL DEFAULT 'active', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`participation_categories\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`status\` enum ('active', 'inactive') NOT NULL DEFAULT 'active', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`participation_categories\``);
        await queryRunner.query(`DROP TABLE \`content_categories\``);
    }
}
exports.CreateUtilityTables1770053022173 = CreateUtilityTables1770053022173;
//# sourceMappingURL=1770053022173-CreateUtilityTables.js.map