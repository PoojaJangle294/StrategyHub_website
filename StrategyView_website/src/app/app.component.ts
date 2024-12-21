import { Component, OnInit } from '@angular/core';
import { DataserviceService } from './services/dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  dateArray: string[] = [];
  strategyArray: any[] = [];
  selectedView = 'Bullish';
  selectedDate = '';
  constructor(private dataService: DataserviceService) {}

  ngOnInit(){
    this.dataService.getData().subscribe((data) => {
      console.log(data);
      
      this.dateArray = data.dateArray;
      this.strategyArray = data.strategyArray;
      this.selectedDate = this.dateArray[0]; // Set the first date as default
    });
  }
  onViewChange(view: any) {
    this.selectedView = view;
  }

  onDateChange(date: any) {
    this.selectedDate = date;
  }
}
