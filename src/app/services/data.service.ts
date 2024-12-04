import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private emailList:any[] = [
    {
      "subject": "Project Update",
      "sender_email": "john.doe@example.com",
      "sender_name": "John Doe",
      "sent":false,
      "attachment_url": "https://example.com/attachments/project_update.pdf",
      "sender_avatar": "https://example.com/avatars/john_doe.jpg",
      "body": "Hi team, please find the latest update on the project attached. Let me know if you have any questions."
    },
    {
      "subject": "Meeting Invitation",
      "sender_email": "jane.smith@example.com",
      "sender_name": "Jane Smith",
      "attachment_url": "https://example.com/attachments/meeting_invite.ics",
      "sender_avatar": "https://example.com/avatars/jane_smith.jpg",
      "body": "You're invited to the quarterly review meeting. Please check the attached calendar invite for details."
    },
    {
      "subject": "Invoice for Services Rendered",
      "sender_email": "accounts@company.com",
      "sender_name": "Accounts Team",
      "attachment_url": "https://example.com/attachments/invoice_12345.pdf",
      "sender_avatar": "https://example.com/avatars/accounts_team.jpg",
      "body": "Dear Customer, please find attached the invoice for services rendered. Contact us if you have any issues."
    },
    {
      "subject": "Weekly Newsletter",
      "sender_email": "newsletter@updates.com",
      "sender_name": "Updates Newsletter",
      "attachment_url": "https://example.com/attachments/newsletter_march.pdf",
      "sender_avatar": "https://example.com/avatars/newsletter.png",
      "body": "Welcome to this week's edition of our newsletter! We've got exciting updates and articles to share with you."
    },
    {
      "subject": "Security Alert",
      "sender_email": "security@provider.com",
      "sender_name": "Security Team",
      "attachment_url": "https://example.com/attachments/security_guide.pdf",
      "sender_avatar": "https://example.com/avatars/security_team.jpg",
      "body": "We've noticed unusual activity on your account. Please review the attached guide and secure your account."
    }
  ]

  getMails(){
    return this.emailList;
  }

  addMail(mail:any){
   this.emailList.push(mail);
  }

}
