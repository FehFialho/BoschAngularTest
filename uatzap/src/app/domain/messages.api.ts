import { Injectable } from '@angular/core';
import { Api } from './api';
import { IMessage } from './interfaces/IMessage';
import { Observable } from 'rxjs/internal/Observable';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MessagesApi extends Api {

  protected override headers : HttpHeaders = new HttpHeaders({
      "Authorization" : sessionStorage.getItem('token')!
    })

  public GetAllMessages = (): Observable<IMessage[]> => {
    return this.client.get<IMessage[]>(`${this.URL}/messages`, {headers : this.headers}).pipe();
  }

  public GetMessagesById = (contactId: string): Observable<IMessage[]> => {
    return this.client.get<IMessage[]>(`${this.URL}/messages/${contactId}`, {headers : this.headers}).pipe();
  }

  public SendMessage = (message: IMessage): Observable<IMessage> => {
    return this.client.post<IMessage>(`${this.URL}/messages`, message, {headers : this.headers}).pipe();
  }
}
