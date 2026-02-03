"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilityController = void 0;
const common_1 = require("@nestjs/common");
const utility_service_1 = require("./utility.service");
let UtilityController = class UtilityController {
    utilityService;
    constructor(utilityService) {
        this.utilityService = utilityService;
    }
    async getContentCategories() {
        return await this.utilityService.findAllContentCategories();
    }
    async getParticipationCategories() {
        return await this.utilityService.findAllParticipationCategories();
    }
    async getSettings() {
        return await this.utilityService.findAllSettings();
    }
};
exports.UtilityController = UtilityController;
__decorate([
    (0, common_1.Get)('content-categories'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UtilityController.prototype, "getContentCategories", null);
__decorate([
    (0, common_1.Get)('participation-categories'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UtilityController.prototype, "getParticipationCategories", null);
__decorate([
    (0, common_1.Get)('vote-settings'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UtilityController.prototype, "getSettings", null);
exports.UtilityController = UtilityController = __decorate([
    (0, common_1.Controller)('utilities'),
    __metadata("design:paramtypes", [utility_service_1.UtilityService])
], UtilityController);
//# sourceMappingURL=utility.controller.js.map