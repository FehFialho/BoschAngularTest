import { Component, Input } from '@angular/core';
import { Header } from '../../shared/header/header';
import { ChatMessage } from './chat-message/chat-message';

@Component({
  selector: 'app-chat-page',
  imports: [Header, ChatMessage],
  templateUrl: './chat-page.html',
  styleUrl: './chat-page.css',
})
export class ChatPage {

}
