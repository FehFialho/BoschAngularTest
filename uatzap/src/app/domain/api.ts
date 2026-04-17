import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {
  protected readonly URL: string = "http://localhost:5294/api"
  constructor( protected client: HttpClient ){}
  protected headers: HttpHeaders = new HttpHeaders({
    "Authorization": sessionStorage.getItem('token')!
  })
}
