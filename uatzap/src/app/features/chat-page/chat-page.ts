import { Component, Input } from '@angular/core';
import { Header } from '../../shared/header/header';
import { ChatMessage } from './chat-message/chat-message';
import { MyInput } from '../../shared/input/input';
import { Button } from '../../shared/button/button';

@Component({
  selector: 'app-chat-page',
  imports: [Header, ChatMessage, MyInput, Button],
  templateUrl: './chat-page.html',
  styleUrl: './chat-page.css',
})
export class ChatPage {

}
