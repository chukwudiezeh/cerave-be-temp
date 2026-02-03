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
exports.Submission = void 0;
const typeorm_1 = require("typeorm");
const enums_1 = require("../../../common/enums");
const participant_entity_1 = require("../../participants/entities/participant.entity");
const participation_category_entity_1 = require("../../utilities/entities/participation-category.entity");
const content_category_entity_1 = require("../../utilities/entities/content-category.entity");
let Submission = class Submission {
    id;
    participationCategoryId;
    participationCategory;
    contentCategoryId;
    contentCategory;
    contentUrl;
    status;
    participantId;
    participant;
    createdAt;
    updatedAt;
};
exports.Submission = Submission;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Submission.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'participation_category_id' }),
    __metadata("design:type", Number)
], Submission.prototype, "participationCategoryId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => participation_category_entity_1.ParticipationCategory),
    (0, typeorm_1.JoinColumn)({ name: 'participation_category_id' }),
    __metadata("design:type", participation_category_entity_1.ParticipationCategory)
], Submission.prototype, "participationCategory", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'content_category_id' }),
    __metadata("design:type", Number)
], Submission.prototype, "contentCategoryId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => content_category_entity_1.ContentCategory),
    (0, typeorm_1.JoinColumn)({ name: 'content_category_id' }),
    __metadata("design:type", content_category_entity_1.ContentCategory)
], Submission.prototype, "contentCategory", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 500, name: 'content_url' }),
    __metadata("design:type", String)
], Submission.prototype, "contentUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: enums_1.SubmissionStatus,
        default: enums_1.SubmissionStatus.PENDING,
    }),
    __metadata("design:type", String)
], Submission.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'participant_id' }),
    __metadata("design:type", Number)
], Submission.prototype, "participantId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => participant_entity_1.Participant),
    (0, typeorm_1.JoinColumn)({ name: 'participant_id' }),
    __metadata("design:type", participant_entity_1.Participant)
], Submission.prototype, "participant", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Submission.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Submission.prototype, "updatedAt", void 0);
exports.Submission = Submission = __decorate([
    (0, typeorm_1.Entity)('submissions')
], Submission);
//# sourceMappingURL=submission.entity.js.map