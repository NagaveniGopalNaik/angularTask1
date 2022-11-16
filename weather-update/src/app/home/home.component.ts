import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { WeatherData } from '../weather-data';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
data=new WeatherData();
currentData:any;
temp:any;
flag:any;
flag1:any;
icon:any;
color=false;
  constructor(private apiService:ApiServiceService) { }

  ngOnInit(): void {
    this.apiService.setId(1);
    localStorage.setItem('page','/home');
    this.call();
    
    this.icon = this.currentData.icon;
    let flag = this.getflag();
    
      if(flag == 'true'){
        this.temp = this.celcius();
      } else{
        this.temp = this.farenheit();
      }
    
  }
  call(){
    this.currentData = JSON.parse(this.apiService.getData() || '{}');
  }
  getflag(){
    return localStorage.getItem('flag') || false;
  }
  celcius(){
    // let temp:any;
    let flag =true;
    this.flag=true;
    this.flag1=false;
    localStorage.setItem('flag',String(flag));
    this.temp =( Number(this.currentData.temp) - 273.15).toFixed(0);
    return this.temp;
   
    
  }
  
  farenheit() {
    // let temp:any;
    let flag = false;
   this.flag1=true;
   this.flag = false;
    localStorage.setItem('flag',String(flag));
    this.temp =(1.8 * (Number(this.currentData.temp) - 273.15) + 32).toFixed(
      0
    );
    return this.temp
  }

  addtoFavorite(){
    this.currentData['like']=true;
    this.apiService.addfavourite(this.currentData);
    this.apiService.updateRecentSearch(this.currentData);
    // this.apiService.addRecentSearch(this.currentData);
    this.color=true;
    this.call();
  }

  removeFavourite(){
    this.currentData['like']=false;
    this.apiService.removeFavourite(this.currentData);
    this.apiService.updateRecentSearch(this.currentData);
    this.color=false;
    this.call();
  }
  

}
