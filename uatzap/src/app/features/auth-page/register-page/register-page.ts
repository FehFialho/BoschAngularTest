import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from '../../../shared/button/button';
import { MyInput } from '../../../shared/input/input';
import { RegisterDto } from '../../../domain/interfaces/RegisterDto';
import { AuthApi } from '../../../domain/auth.api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  imports: [ReactiveFormsModule, Button, MyInput],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {

  constructor(
    private api : AuthApi,
    private router: Router
  ){}

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
  get Email() {
    return this.registerForm.get("email")
  }

  get Number() {
    return this.registerForm.get("number")
  }

  get BirthDate() {
    return this.registerForm.get("birthdate")
  }

  get Password() {
    return this.registerForm.get("password")
  }

  formAction = () => {
    console.log('Tentando Registrar');
  }

  subscribe = () => {
    if(!this.registerForm.valid)
    {
      alert("Nem todos os campos são validos!");
      return
    }

    const data: RegisterDto = {
      username: this.Username?.value,
      email: this.Email?.value,
      phone: this.Number?.value,
      birthday: this.BirthDate?.value,
      password: this.Password?.value,
    }

    this.api.login(data).subscribe(
      res => {
        sessionStorage.setItem("token", res);
        this.router.navigate(['']);
      }
    );
  }
}
