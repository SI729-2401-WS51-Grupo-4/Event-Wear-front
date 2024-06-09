import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Chat } from "../../model/chat.entity";
import { ChatService } from "../../services/chat.service";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-chats',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,CommonModule, RouterModule],
  templateUrl: './user-chats.component.html',
  styleUrl: './user-chats.component.css'
})
export class UserChatsComponent {

  chats: Array<Chat> = [];

  constructor(private chatsapi: ChatService){}

     ngOnInit(): void {
          this.chatsapi.getAll().subscribe((response: any) => {
            this.chats = response;
            console.log(this.chats);

          });

     }

}
