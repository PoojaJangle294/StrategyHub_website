import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input() dates: string[] = []; // Input property to receive dates from parent
  @Output() dateChange = new EventEmitter<string>(); // Emit the selected date
  selectedDate: string = '24-Apr-2024'; // Initially selected date

  // Triggered whenever the user selects a new date from the dropdown.
  onDateChange() {
    this.dateChange.emit(this.selectedDate); // Emit the selected date
  }
}
