export interface EmailNotificationData {
  recipient: string;
  subject: string;
  template: string;
  params: Record<string, any>;
  cc?: string;
  bcc?: string;
}
