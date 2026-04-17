import { Component } from '@angular/core';
import { Button } from '../../shared/button/button';
import { Input } from '../../shared/input/input';
import { Header } from '../../shared/header/header';

@Component({
  selector: 'app-contact-page',
  imports: [Button, Input, Header],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {}
