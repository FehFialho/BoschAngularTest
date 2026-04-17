import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from '../../../shared/button/button';
import { MyInput } from '../../../shared/input/input';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule, Button, MyInput],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {

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

  }

}
