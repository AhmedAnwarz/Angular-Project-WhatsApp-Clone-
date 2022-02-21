import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Project-WhatsApp-Clone';

  
  chat: any;
  onConversationSelected(chat: any){
    this.chat = chat;
  }
}
