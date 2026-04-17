import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from '../../../shared/button/button';
import { MyInput } from '../../../shared/input/input';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-register-page',
  imports: [ReactiveFormsModule, Button, MyInput],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {

  protected isSubscribe: boolean = false;

  registerForm : FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    number: new FormControl('', [Validators.required, Validators.maxLength(11), Validators.minLength(10)]),
    birthdate: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(8), Validators.pattern('')])
    // Não sei escrever regex...
  })

  get Username() {
    return this.registerForm.get("username")
  }
  get Password() {
    return this.registerForm.get("password")
  }

  formAction = () => {
    console.log('Tentando Registrar');
  }
}
