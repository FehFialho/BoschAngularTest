import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from '../../../shared/button/button';
import { LoginDto } from '../../../domain/interfaces/LoginDto';
import { AuthApi } from '../../../domain/auth.api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule, Button],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {

  constructor(
    private api : AuthApi,
    private router: Router
  ){}

  protected isSubscribe: boolean = false;

  loginForm : FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  get Email() {
    return this.loginForm.get("email")
  }
  get Password() {
    return this.loginForm.get("password")
  }

  formAction = () => {
    console.log('Tentando Logar');
    return this.login();
  }

  login = () => {
    if(!this.loginForm.valid)
    {
      alert("Nem todos os campos são validos!");
      return
    }
    const data: LoginDto = {
      password: this.Password?.value,
      email: this.Email?.value
    }

    this.api.login(data).subscribe(
      res => {
        sessionStorage.setItem("token", res);
        this.router.navigate(['']);
      }
    );
  }
}
