import { ConfigService } from '@nestjs/config';
import { EmailNotificationData } from './interfaces';
export declare class NotificationService {
    private readonly configService;
    private readonly logger;
    private readonly apiUrl;
    private readonly senderEmail;
    private readonly senderId;
    constructor(configService: ConfigService);
    sendEmailNotification(notificationData: EmailNotificationData): Promise<boolean>;
}
