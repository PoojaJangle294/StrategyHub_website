import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent {
  @Output() viewChange = new EventEmitter<string>(); // Output event to send selected view
  views: string[] = ['Bullish', 'Bearish', 'RangeBound', 'Volatile']; // Available views
  selectedView: string = 'Bullish'; // Default selected view

  /**
 * Handles the view change event by updating the selected view and notifying the parent component.
 * view - The name of the view to be selected (e.g., 'Bullish', 'Bearish', etc.).
 */
  changeView(view: string) {
    this.selectedView = view;
    this.viewChange.emit(view); // Emit the selected view to parent component
  }
}
