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
exports.VoterService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const voter_entity_1 = require("./entities/voter.entity");
const notification_service_1 = require("../notifications/notification.service");
let VoterService = class VoterService {
    voterRepository;
    notificationService;
    constructor(voterRepository, notificationService) {
        this.voterRepository = voterRepository;
        this.notificationService = notificationService;
    }
    generateOtp() {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }
    async sendOtpEmail(email, otp) {
        this.notificationService.sendEmailNotification({
            recipient: email,
            subject: 'Your Verification Code - CeraVe Voting',
            template: 'voter_otp',
            params: { otp },
        });
    }
    async create(createVoterDto) {
        const { email } = createVoterDto;
        const normalizedEmail = email.toLowerCase();
        const existingVoter = await this.voterRepository.findOne({
            where: { email: normalizedEmail },
        });
        if (existingVoter) {
            if (existingVoter.emailVerified) {
                throw new common_1.ConflictException('This email is already verified');
            }
            const otp = this.generateOtp();
            await this.sendOtpEmail(normalizedEmail, otp);
            return { message: 'Verification code resent to your email' };
        }
        const voter = this.voterRepository.create({
            email: normalizedEmail,
        });
        await this.voterRepository.save(voter);
        const otp = this.generateOtp();
        await this.sendOtpEmail(normalizedEmail, otp);
        return { message: 'Verification code sent to your email' };
    }
};
exports.VoterService = VoterService;
exports.VoterService = VoterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(voter_entity_1.Voter)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        notification_service_1.NotificationService])
], VoterService);
//# sourceMappingURL=voter.service.js.map