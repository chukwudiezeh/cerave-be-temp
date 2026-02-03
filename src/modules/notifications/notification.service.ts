import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EmailNotificationData } from './interfaces';

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);
  private readonly apiUrl: string;
  private readonly senderEmail: string;
  private readonly senderId: string;

  constructor(private readonly configService: ConfigService) {
    this.apiUrl = this.configService.get<string>('NOTIFICATION_API_URL') || 'http://hermes.igbimo.com/v1/notifications';
    this.senderEmail = this.configService.get<string>('NOTIFICATION_SENDER_EMAIL') || 'noreply@cerave.com';
    this.senderId = this.configService.get<string>('NOTIFICATION_SENDER_ID') || 'CERAVE';
  }

  async sendEmailNotification(notificationData: EmailNotificationData): Promise<boolean> {
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
      } else {
        this.logger.error(`Error sending email to ${notificationData.recipient}`, responseData);
        return false;
      }
    } catch (error) {
      this.logger.error('Error sending email:', error);
      return false;
    }
  }
}
