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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmissionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const submission_entity_1 = require("./entities/submission.entity");
const participant_entity_1 = require("../participants/entities/participant.entity");
const notification_service_1 = require("../notifications/notification.service");
let SubmissionService = class SubmissionService {
    submissionRepository;
    participantRepository;
    dataSource;
    notificationService;
    constructor(submissionRepository, participantRepository, dataSource, notificationService) {
        this.submissionRepository = submissionRepository;
        this.participantRepository = participantRepository;
        this.dataSource = dataSource;
        this.notificationService = notificationService;
    }
    async create(createSubmissionDto) {
        const { firstname, surname, email, mobile, address, submissions } = createSubmissionDto;
        this.validateUniqueSubmissions(submissions);
        return await this.dataSource.transaction(async (transactionManager) => {
            let participant = await transactionManager.findOne(participant_entity_1.Participant, {
                where: { email: email.toLowerCase() },
            });
            if (!participant) {
                participant = transactionManager.create(participant_entity_1.Participant, {
                    firstname,
                    surname,
                    email: email.toLowerCase(),
                    mobile,
                    address,
                });
                participant = await transactionManager.save(participant_entity_1.Participant, participant);
            }
            const savedSubmissions = [];
            const duplicates = [];
            for (const item of submissions) {
                const existingSubmission = await transactionManager.findOne(submission_entity_1.Submission, {
                    where: {
                        participantId: participant.id,
                        participationCategoryId: item.participationCategoryId,
                        contentCategoryId: item.contentCategoryId,
                    },
                });
                if (existingSubmission) {
                    duplicates.push(`Participation: ${item.participationCategoryId}, Content: ${item.contentCategoryId}`);
                    continue;
                }
                const submission = transactionManager.create(submission_entity_1.Submission, {
                    participantId: participant.id,
                    participationCategoryId: item.participationCategoryId,
                    contentCategoryId: item.contentCategoryId,
                    contentUrl: item.contentUrl,
                });
                const saved = await transactionManager.save(submission_entity_1.Submission, submission);
                savedSubmissions.push(saved);
            }
            if (savedSubmissions.length === 0) {
                throw new common_1.ConflictException('All submissions already exist for this participant');
            }
            this.notificationService.sendEmailNotification({
                recipient: email.toLowerCase(),
                subject: 'Submission Received - Cera Awards',
                template: 'generic',
                params: {
                    body: `<p>Dear ${firstname} ${surname},</p>
                 <p>Thank you for your submission!</p>
                 <p>We received ${savedSubmissions.length} submission(s). They are now under review.</p>
                 ${duplicates.length > 0 ? `<p>Note: ${duplicates.length} duplicate submission(s) were skipped.</p>` : ''}`,
                },
            });
            return { participant, submissions: savedSubmissions };
        });
    }
    validateUniqueSubmissions(submissions) {
        const seen = new Set();
        for (const item of submissions) {
            const key = `${item.participationCategoryId}-${item.contentCategoryId}`;
            if (seen.has(key)) {
                throw new common_1.BadRequestException(`Duplicate submission in request: Participation category ${item.participationCategoryId} with content category ${item.contentCategoryId}`);
            }
            seen.add(key);
        }
    }
};
exports.SubmissionService = SubmissionService;
exports.SubmissionService = SubmissionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(submission_entity_1.Submission)),
    __param(1, (0, typeorm_1.InjectRepository)(participant_entity_1.Participant)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.DataSource,
        notification_service_1.NotificationService])
], SubmissionService);
//# sourceMappingURL=submission.service.js.map