import { Routes } from '@angular/router';
import { AuthPage } from './features/auth-page/auth-page';
import { LoginPage } from './features/auth-page/login-page/login-page';
import { RegisterPage } from './features/auth-page/register-page/register-page';
import { NotFoundPage } from './features/not-found-page/not-found-page';
import { ContactPage } from './features/contact-page/contact-page';
import { ChatPage } from './features/chat-page/chat-page';

export const routes: Routes = [
  {path: "auth", component:AuthPage, children: [
    {path: "login", component:LoginPage},
    {path: "register", component:RegisterPage}
  ]},
  {path: "", component:ContactPage},
  {path: "chat", component:ChatPage},
  {path: "**", component:NotFoundPage}
];
