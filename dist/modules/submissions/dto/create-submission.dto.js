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
exports.CreateSubmissionDto = exports.SubmissionItemDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class SubmissionItemDto {
    participationCategoryId;
    contentCategoryId;
    contentUrl;
}
exports.SubmissionItemDto = SubmissionItemDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Participation category is required' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Participation category must be a number' }),
    __metadata("design:type", Number)
], SubmissionItemDto.prototype, "participationCategoryId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Content category is required' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Content category must be a number' }),
    __metadata("design:type", Number)
], SubmissionItemDto.prototype, "contentCategoryId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Content URL is required' }),
    (0, class_validator_1.IsUrl)({}, { message: 'Invalid URL format' }),
    __metadata("design:type", String)
], SubmissionItemDto.prototype, "contentUrl", void 0);
class CreateSubmissionDto {
    firstname;
    surname;
    email;
    mobile;
    address;
    submissions;
}
exports.CreateSubmissionDto = CreateSubmissionDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'First name is required' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSubmissionDto.prototype, "firstname", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Surname is required' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSubmissionDto.prototype, "surname", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Email is required' }),
    (0, class_validator_1.IsEmail)({}, { message: 'Invalid email format' }),
    __metadata("design:type", String)
], CreateSubmissionDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Mobile is required' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSubmissionDto.prototype, "mobile", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSubmissionDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsArray)({ message: 'Submissions must be an array' }),
    (0, class_validator_1.ArrayMinSize)(1, { message: 'At least one submission is required' }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => SubmissionItemDto),
    __metadata("design:type", Array)
], CreateSubmissionDto.prototype, "submissions", void 0);
//# sourceMappingURL=create-submission.dto.js.map