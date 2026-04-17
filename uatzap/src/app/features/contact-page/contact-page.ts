import { Component, signal } from '@angular/core';
import { Button } from '../../shared/button/button';
import { MyInput } from '../../shared/input/input';
import { Header } from '../../shared/header/header';
import { ContactsApi } from '../../domain/contacts.api';
import { ActivatedRoute } from '@angular/router';
import { IContact } from '../../domain/interfaces/IContact';
import { NewContactModal } from './new-contact-modal/new-contact-modal';

@Component({
  selector: 'app-contact-page',
  imports: [Button, MyInput, Header, NewContactModal],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {

  constructor (
    private api: ContactsApi,
    private router: ActivatedRoute
  ){}

  protected contacts = signal<IContact[][]>([]);

  // Lista vazia inicialmente
  // this.contacts.set([]);

  // Pegar todos os contatos do usuário e inserir no array de contacts para renderizar na página de contatos!
  // getContacts = (data: IContact[]) => {
  //   console.log("Drawing all pixels");
  //   this.contacts.update(
  //     this.api.GetAllContacts()
  //   })
  // }

  openModal = () => {
    console.log('Abrindo o Modal');
  }
}
