import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import { HttpClient } from "@angular/common/http";
import {  Chat } from "../model/chat.entity"

@Injectable({
  providedIn: 'root'
})
export class ChatService{
  private baseUrl = 'https://my-json-server.typicode.com/AdrianoSCruzP/chat';
  constructor(private http: HttpClient) { }

  getAll  (): any {
    return this.http.get(`${this.baseUrl}/chats`);
  }

}
