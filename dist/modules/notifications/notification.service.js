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
var NotificationService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let NotificationService = NotificationService_1 = class NotificationService {
    configService;
    logger = new common_1.Logger(NotificationService_1.name);
    apiUrl;
    senderEmail;
    senderId;
    constructor(configService) {
        this.configService = configService;
        this.apiUrl = this.configService.get('NOTIFICATION_API_URL') || 'http://hermes.igbimo.com/v1/notifications';
        this.senderEmail = this.configService.get('NOTIFICATION_SENDER_EMAIL') || 'noreply@cerave.com';
        this.senderId = this.configService.get('NOTIFICATION_SENDER_ID') || 'CERAVE';
    }
    async sendEmailNotification(notificationData) {
        const mailOptions = {
            medium: 'email',
            sender: this.senderEmail,
            sender_id: this.senderId,
            recipient: notificationData.recipient,
            cc: notificationData.cc || '',
            bcc: notificationData.bcc || '',
            subject: notificationData.subject,
            params: notificationData.params,
            name: notificationData.template,
        };
        try {
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(mailOptions),
            });
            const responseData = await response.json();
            if (response.ok) {
                this.logger.log(`Email sent successfully to ${notificationData.recipient}`);
                return true;
            }
            else {
                this.logger.error(`Error sending email to ${notificationData.recipient}`, responseData);
                return false;
            }
        }
        catch (error) {
            this.logger.error('Error sending email:', error);
            return false;
        }
    }
};
exports.NotificationService = NotificationService;
exports.NotificationService = NotificationService = NotificationService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], NotificationService);
//# sourceMappingURL=notification.service.js.map