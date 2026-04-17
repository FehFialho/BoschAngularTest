import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  imports: [],
  templateUrl: './chat-message.html',
  styleUrl: './chat-message.css',
})
export class ChatMessage {

  // Binding de mensagem para definir o conteúdo e um booleano para definir quem enviou e quem recebeu
  // Futuramente pode-se implementar datetime ou até visualização!

  @Input()
  Content: string = "";
  @Input()
  Sended: boolean = true;

  // Adicionar classe no CSS de acordo com o boolean para aparecer de forma diferente no chat

  // if (Sended) {
  //   // Adiciona Classe .sended
  // }else{
  //   //Adiciona Classe .received
  // }
}
