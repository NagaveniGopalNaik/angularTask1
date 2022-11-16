import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
currentData:any;
temp_min:any;
temp_max:any;
wind:any;
visibility:any;
  constructor(private apiService:ApiServiceService) { }

  ngOnInit(): void {
    this.currentData = JSON.parse(this.apiService.getData() || '{}');
    this.temp_min = (this.currentData.temp_min - 273.15).toFixed(0);
  this.temp_max = (this.currentData.temp_max-273.15).toFixed(0);
  this.wind = (this.currentData.wind)*10 ;
  this.visibility = ((this.currentData.visibility) * 0.001).toFixed(0);
  }

}
