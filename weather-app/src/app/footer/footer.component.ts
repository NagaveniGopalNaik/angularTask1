import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../weather-data';

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
default=new WeatherData();
  constructor() { }

  ngOnInit(): void {
// alert(this.currentData.Pressure);
if(localStorage.getItem('data')){
    this.currentData = localStorage.getItem('data');
    this.currentData = JSON.parse(this.currentData);
this.temp_min = (this.currentData.temp_min - 273.15).toFixed(0);
  this.temp_max = (this.currentData.temp_max-273.15).toFixed(0);
  this.wind = (this.currentData.wind);
  this.visibility = ((this.currentData.visibility) * 0.001).toFixed(0);
} else {
  localStorage.setItem('data',JSON.stringify(this.default));
}
}

}
