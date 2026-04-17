import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IContact } from './interfaces/IContact';
import { Api } from './api';

@Injectable({
  providedIn: 'root',
})
export class ContactsApi extends Api {

  public GetAllContacts = (): Observable<IContact[]> => {
    return this.client.get<IContact[]>(`${this.URL}/contacts`).pipe();
  }

  public AddContact = (): Observable<IContact> => {
    const token = sessionStorage.getItem('token');
    return this.client.post<IContact>(`${this.URL}/contacts`, token).pipe();
  }
}
