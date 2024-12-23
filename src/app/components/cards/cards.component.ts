import { Component, Input } from '@angular/core';

// Define the interface for Strategy
interface Strategy {
  name: string;
  count: number;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() view: string = ''; // Selected view (Bullish, Bearish, etc.)
  @Input() date: string = ''; // Selected date
  @Input() strategies: any[] = []; // Strategies array

  
  // Get filtered strategies based on selected view and date
  get filteredStrategies() {
    const viewData = this.strategies.find(strategy => strategy.View === this.view)?.Value[this.date] || [];
    
    // Create an object that counts the occurrences of strategy names
    const strategyCounts = viewData.reduce((acc: { [key: string]: number }, name: string) => {
      acc[name] = (acc[name] || 0) + 1;
      return acc;
    }, {});

    // Map the counted data to an array of objects with name and count
    return Object.entries(strategyCounts).map(([name, count]) => ({ name, count })) as Strategy[];
  }
}
