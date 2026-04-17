import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MyInput } from '../../../shared/input/input';
import { Button } from '../../../shared/button/button';

@Component({
  selector: 'app-new-contact-modal',
  imports: [MyInput, Button],
  templateUrl: './new-contact-modal.html',
  styleUrl: './new-contact-modal.css',
})
export class NewContactModal {
  @Input()
  ShowModal: boolean = false;
  @Output()
  onClose: EventEmitter<void> = new EventEmitter();
  @Output()
  onSave: EventEmitter<void> = new EventEmitter();

  toggleClose = () => {
    this.onClose.emit();
  }
  toggleSave = () => {
    this.onSave.emit();
  }
}
