"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const isProduction = process.env.NODE_ENV === 'production';
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3307', 10),
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'cerave_db',
    entities: [isProduction ? 'dist/**/*.entity.js' : 'src/**/*.entity.ts'],
    migrations: [isProduction ? 'dist/database/migrations/*.js' : 'src/database/migrations/*.ts'],
    synchronize: false,
    ssl: isProduction ? { rejectUnauthorized: false } : false,
});
//# sourceMappingURL=data-source.js.map