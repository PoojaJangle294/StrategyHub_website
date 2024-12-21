import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


// Define the structure of the data
export interface Strategy {
  View: string;
  Value: { [key: string]: string[] };
}
@Injectable({
  providedIn: 'root'
})


export class DataserviceService {

  constructor(private http: HttpClient) { }

  // Fetch the data from the assets data.json file
  getData(): Observable<any> {
    console.log(this.http.get('assets/db.json'));
     
    return this.http.get('/assets/db.json'); 
  }
}
