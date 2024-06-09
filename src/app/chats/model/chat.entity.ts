import { Message } from './message.entity';
import { Participant } from './participant.entity';


export class Chat {
  chat_id: string;
  timestamp: string;
  participants: Participant;
  message_count: number;
  chat_status: string;
  messages: Message;

  constructor() {
    this.chat_id = " ";
    this.timestamp = " ";
    this.participants = new Participant;
    this.message_count = 0;
    this.chat_status = " ";
    this.messages = new Message;
  }
}
