import { Component, EventEmitter, Output, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [FormsModule],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class MyInput {

  @Input()
  Placeholder: string = "";
  @Output()
  onChange: EventEmitter<string> = new EventEmitter();
  value = this.Placeholder; // Recebe o mesmo valor inicial de PlaceHolder

  onInputChange = (value: any) => {
    const insertedValue = value.srcElement?.value;
    this.onChange.emit(insertedValue)
    console.log('insertedValue: ', insertedValue);
    console.log('value: ', value);
  }
}

