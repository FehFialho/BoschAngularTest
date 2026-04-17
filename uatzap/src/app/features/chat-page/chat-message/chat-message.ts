import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  imports: [],
  templateUrl: './chat-message.html',
  styleUrl: './chat-message.css',
})
export class ChatMessage {
  @Input()
  Content: string = "";
  @Input()
  Sended: boolean = true;

  // if (Sended) {
  //   // Adiciona Classe .sended
  // }else{
  //   //Adiciona Classe .received
  // }
}
