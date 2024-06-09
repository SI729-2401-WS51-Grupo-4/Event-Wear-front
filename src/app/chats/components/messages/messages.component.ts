import { Component,ViewChild } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Chat } from "../../model/chat.entity";
import { ChatService } from "../../services/chat.service";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,CommonModule, RouterModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  messages: Array<any> = [];
  newMessage: string = '';
  constructor(private chatsapi: ChatService){}

  ngOnInit(): void {
    this.chatsapi.getAll().subscribe((response: any) => {
      this.messages = response.map((chat: any) => ({
        messages: Object.values(chat.messages)
      }));
      console.log(this.messages);
    });
  }

  sendMessage(): void {
    if (this.newMessage.trim() === '') {
      return;
    }

    const newMessage = {
      chat_id: '1', // Assuming you are hardcoding for chat_id '1'
      message_id: `msg${Date.now()}`, // Simple unique id based on timestamp
      timestamp: new Date().toISOString(),
      user_id: 'user1', // Assuming the user is 'user1'
      content: this.newMessage.trim()
    };

    this.messages.find(chat => chat.chat_id === '1').messages.push(newMessage);
    this.newMessage = '';
  }
}
