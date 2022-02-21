import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @Input() chat: any
  @Output() onSubmit: EventEmitter<any> = new EventEmitter()
  emojiPickerVisible:any
  message=''
  constructor() { }

  ngOnInit(): void {
  }

  submitMessage(event: any) {
    const dateNow = new Date();
    const dateNowMinutesHours = `${dateNow.getHours() > 12? dateNow.getHours() - 12 : dateNow.getHours()}:${dateNow.getMinutes()} ${dateNow.getHours() > 12? 'pm' : 'am'}`;

    let value = event.target.value.trim()
    this.message = ''
    if (value.length >= 1) {
      this.chat.messages.unshift({
        id: 1, body: value, time: dateNowMinutesHours, me: true
      })
    }
    this.chat.message = value
    this.chat.time =dateNowMinutesHours
  }

  emojiClicked(event:any){
    this.message+=event.emoji.native
  }

}
