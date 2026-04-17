import { Injectable } from '@angular/core';
import { Api } from './api';
import { LoginDto } from './interfaces/LoginDto';
import { Observable } from 'rxjs';
import { RegisterDto } from './interfaces/RegisterDto';

@Injectable({
  providedIn: 'root',
})
export class AuthApi extends Api {

  login = (data: LoginDto) : Observable<string> => {
    return this.client.post<string>(`${this.URL}/auth/login`, data).pipe();
  }

  subscribe = (data: RegisterDto): Observable<void> => {
    return this.client.post<void>(`${this.URL}/auth/subscribe`, data).pipe()
  }

}
