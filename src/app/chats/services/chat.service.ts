import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import { HttpClient } from "@angular/common/http";
import {  Chat } from "../model/chat.entity"

@Injectable({
  providedIn: 'root'
})
export class ChatService extends BaseService<Chat>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/chats';

  }
}
