import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input()
  Title: string = ""
  @Output()
  onClick: EventEmitter<void> = new EventEmitter();

  toggleClick = () => {
    this.onClick.emit();
    console.log('Button Clicked!');
  }
}
