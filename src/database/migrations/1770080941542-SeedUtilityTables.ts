import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedUtilityTables1770080941542 implements MigrationInterface {
    name = 'SeedUtilityTables1770080941542'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Seed participation categories
        await queryRunner.query(`
            INSERT INTO participation_categories (name, status) VALUES
            ('MedFluencer', 'active'),
            ('CeraLover', 'active')
        `);

        // Seed content categories
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

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM content_categories WHERE name IN ('Educational', 'Original', 'Routine', 'Cleansing', 'Body Moisturizing', 'Facial Moisturizing')`);
        await queryRunner.query(`DELETE FROM participation_categories WHERE name IN ('MedFluencer', 'CeraLover')`);
    }

}
