"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedUtilityTables1770080941542 = void 0;
class SeedUtilityTables1770080941542 {
    name = 'SeedUtilityTables1770080941542';
    async up(queryRunner) {
        await queryRunner.query(`
            INSERT INTO participation_categories (name, status) VALUES
            ('MedFluencer', 'active'),
            ('CeraLover', 'active')
        `);
        await queryRunner.query(`
            INSERT INTO content_categories (name, status) VALUES
            ('Educational', 'active'),
            ('Original', 'active'),
            ('Routine', 'active'),
            ('Cleansing', 'active'),
            ('Body Moisturizing', 'active'),
            ('Facial Moisturizing', 'active')
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DELETE FROM content_categories WHERE name IN ('Educational', 'Original', 'Routine', 'Cleansing', 'Body Moisturizing', 'Facial Moisturizing')`);
        await queryRunner.query(`DELETE FROM participation_categories WHERE name IN ('MedFluencer', 'CeraLover')`);
    }
}
exports.SeedUtilityTables1770080941542 = SeedUtilityTables1770080941542;
//# sourceMappingURL=1770080941542-SeedUtilityTables.js.map