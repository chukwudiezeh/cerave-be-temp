"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilityModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const utility_controller_1 = require("./utility.controller");
const utility_service_1 = require("./utility.service");
const content_category_entity_1 = require("./entities/content-category.entity");
const participation_category_entity_1 = require("./entities/participation-category.entity");
const setting_entity_1 = require("./entities/setting.entity");
let UtilityModule = class UtilityModule {
};
exports.UtilityModule = UtilityModule;
exports.UtilityModule = UtilityModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([content_category_entity_1.ContentCategory, participation_category_entity_1.ParticipationCategory, setting_entity_1.Setting])],
        controllers: [utility_controller_1.UtilityController],
        providers: [utility_service_1.UtilityService],
        exports: [utility_service_1.UtilityService],
    })
], UtilityModule);
//# sourceMappingURL=utility.module.js.map