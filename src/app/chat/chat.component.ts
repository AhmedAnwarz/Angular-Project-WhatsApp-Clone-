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
    const dateNowMinusEightHours = `${dateNow.getHours()}:${dateNow.getMinutes()}`;

    let value = event.target.value.trim()
    this.message = ''
    if (value.length >= 1) {
      this.chat.messages.unshift({
        id: 1, body: value, time: dateNowMinusEightHours, me: true
      })
    }
    this.chat.message = value
  }

  emojiClicked(event:any){
    this.message+=event.emoji.native
  }

}
