import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MailListComponent } from './mail-list/mail-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MailListComponent],
  templateUrl: './app.component.html',
  //template: '<h1>Hello World</h1>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gmail';
}
