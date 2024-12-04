import { Component } from '@angular/core';
import { ComposeComponent } from "../compose/compose.component";
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mail-list',//tag
  standalone: true,
  imports: [ComposeComponent,CommonModule,FormsModule],
  templateUrl: './mail-list.component.html',
  styleUrl: './mail-list.component.css'
})
export class MailListComponent {


  mails:any[] = []
  selectedEmail:any = {}
  title:string = 'Sample title'

  constructor(private dataService:DataService){

    this.getAllEmails();

  }

 
 name:String = "Henry";

 getAllEmails(){

  this.mails = this.dataService.getMails();
  console.log('Mails',this.mails);

 }

 showSelectedEmail(mail:any){
  this.selectedEmail = mail;
 }

  
 addEmail() {
     
  let email = {
    "subject": "Project Update",
    "sender_email": "john.doe@example.com",
    "sender_name": "John Doe",
    "sent":false,
    "attachment_url": "https://example.com/attachments/project_update.pdf",
    "sender_avatar": "https://example.com/avatars/john_doe.jpg",
    "body": "Hi team, this my new email"
  }

  this.dataService.addMail(email);

  this.getAllEmails();
}

}
