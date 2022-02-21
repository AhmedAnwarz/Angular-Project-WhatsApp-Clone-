import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() searchText: string =""
  @Output() conversationClicked: EventEmitter<any> = new EventEmitter()
  conversations = [
    {
      ChName: 'Mohamed Darwesh', message: 'first stage is done', time: '12:15 am', img: 'assets/main-qimg-f32f85d21d59a5540948c3bfbce52e68-lq.jpg', seen: true, Menu: true,
      messages: [
        { id: 1, body: "Hello dude, how are you?", time: '8:21', me: true },
        { id: 2, body: "Fine you?", time: '8:21', me: false },
        { id: 3, body: "all is good!", time: '8:21', me: true },
        { id: 4, body: "okay bye..", time: '8:21', me: false },
      ]
    },
    {
      ChName: 'Jim Carrey', message: "Don't worry bruh", time: '7:10 am', img: 'assets/242px-Jim_Carrey_2008.jpg', seen: false, Menu: true,
      messages: [
        { id: 1, body: "Hello dude, how are you?", time: '8:21', me: true },
        { id: 2, body: "Fine you?", time: '8:21', me: false },
        { id: 3, body: "all is good!", time: '8:21', me: true },
        { id: 4, body: "okay bye..", time: '8:21', me: false },
      ]
    },
    {
      ChName: 'Kevin Hurt', message: 'Morning', time: '4:02 pm', img: 'assets/Kevin_Hart_Pic.jpg', seen: true, Menu: true,
      messages: [
        { id: 1, body: "Hello dude, how are you?", time: '8:21', me: true },
        { id: 2, body: "Fine you?", time: '8:21', me: false },
        { id: 3, body: "all is good!", time: '8:21', me: true },
        { id: 4, body: "okay bye..", time: '8:21', me: false },
      ]
    },
    {
      ChName: 'Jason Stathom', message: "I'll meet you sooner or later", time: '3:54 pm', img: 'assets/257px-Jason_Statham_2018.jpg', seen: false, Menu: true,
      messages: [
        { id: 1, body: "Hello dude, how are you?", time: '8:21', me: true },
        { id: 2, body: "Fine you?", time: '8:21', me: false },
        { id: 3, body: "all is good!", time: '8:21', me: true },
        { id: 4, body: "okay bye..", time: '8:21', me: false },
      ]
    },
    {
      ChName: 'Scarlett Johansson', message: "I'll meet you sooner or later", time: '3:54 pm', img: 'assets/Scarlett_Johansson_by_Gage_Skidmore_2_(cropped,_2).jpg.webp', seen: true, Menu: true,
      messages: [
        { id: 1, body: "Hello dude, how are you?", time: '8:21', me: true },
        { id: 2, body: "Fine you?", time: '8:21', me: false },
        { id: 3, body: "all is good!", time: '8:21', me: true },
        { id: 4, body: "okay bye..", time: '8:21', me: false },
      ]
    },
    {
      ChName: 'Jason Stathom', message: "I'll meet you sooner or later", time: '3:54 pm', img: 'assets/257px-Jason_Statham_2018.jpg', seen: false, Menu: true,
      messages: [
        { id: 1, body: "Hello dude, how are you?", time: '8:21', me: true },
        { id: 2, body: "Fine you?", time: '8:21', me: false },
        { id: 3, body: "all is good!", time: '8:21', me: true },
        { id: 4, body: "okay bye..", time: '8:21', me: false },
      ]
    },

    {
      ChName: 'Jason Stathom', message: "I'll meet you sooner or later", time: '3:54 pm', img: 'assets/257px-Jason_Statham_2018.jpg', seen: false, Menu: true,
      messages: [
        { id: 1, body: "Hello dude, how are you?", time: '8:21', me: true },
        { id: 2, body: "Fine you?", time: '8:21', me: false },
        { id: 3, body: "all is good!", time: '8:21', me: true },
        { id: 4, body: "okay bye..", time: '8:21', me: false },
      ]
    }
  ]
  
  get filteredConversations(){
    return this.conversations.filter((chat)=>{
      return (
        chat.ChName.includes(this.searchText.toLowerCase()) 
        || chat.message.toLowerCase().includes(this.searchText.toLowerCase())
      )
    })
  }
  constructor() { }
  ngOnInit(): void {
  }
  seeMenu(i: number) {
    this.conversations[i].Menu = false;
    console.log(i);
  }
  hideMenu(i: number) {
    this.conversations[i].Menu = true;
  }
  faCheck = faCheck;
  faCheckDouble = faCheckDouble;
  faChevronDown = faChevronDown;
  faAngleUp = faAngleUp;
}
