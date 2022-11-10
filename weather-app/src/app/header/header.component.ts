import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from '../weather.service';
import { WeatherData } from '../weather-data';
import { NgForm } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
date:any;
id:any;
// display=true;
navDisplay=false;
search=false;
search1=true;
home=true;
fev=false;
recent=false;
fev1=false;
textFocus=false;
mobileMedia:any=window.matchMedia("('max-width:500')");
weather!:NgForm;
data:any;
city='';
cityData = new WeatherData();
index:number=0;
dataList:any;
fevData:any=[];

like=false;

  constructor(private route: ActivatedRoute,private service:WeatherService,private router : Router) { }

  ngOnInit(): void {
    this.date = new Date();
    
    // this.route.queryParams.subscribe(data=>this.id=data['id']);
    // this.fev = false;

    // if(localStorage.getItem('store')==null){
    //   localStorage.setItem('store','[]');
    // } 
      
    
   
  }

  clearBtn(){
    this.textFocus = true;
  }
 
  navDisplayPermission(){
    if(this.mobileMedia){
      
      this.fev= false;
    this.home=true;
    
    } else{
      this.fev=false;
      this.home=true;
    }
    
    // this.display=!this.display;
    this.navDisplay = !this.navDisplay;
  }

  searchBar(){
    this.search=true;
    this.search1=false;
  }
  backHome(){
    this.search = false;
    this.search1 = true;
    
    
  }

  clear(){

  }
  gotoHome(){
  this.home=true;
  this.fev= false;
  
  }

  gotoFavorite(){
    // debugger;
    this.fev1=true;
    this.recent= false;
    if(this.mobileMedia){
      this.home=false;
      this.fev= true;
      
    
    } else{
      this.fev=false;
      this.home=true;
    }
    
  }
  gotoRecentSearch(){
    this.recent= true;
    this.fev1=false;
    if(this.mobileMedia){
      this.home=false;
      this.fev= true;
      
    
    } else{
      this.fev=false;
      this.home=true;
    }
    
  }
  submit(formValue:NgForm){
     
    this.service.loadData(this.city).subscribe((result)=>{
      
      this.data=result;
     
      // console.log(this.data['name']);
      this.cityData.name=this.data['name'];
      let weatherDetails = this.data['weather'][0];
      let weather=weatherDetails.icon
      this.cityData.icon =  weather;
      this.cityData.temp = this.data['main'].temp;
      this.cityData.description = this.data['weather'][0].description;
      this.cityData.temp_min = this.data['main'].temp_min;
      this.cityData.temp_max = this.data['main'].temp_max;
      this.cityData.pressure = this.data['main'].pressure;
      this.cityData.humidity = this.data['main'].humidity;
      this.cityData.wind = this.data['wind'].speed;
      this.cityData.visibility = this.data['visibility'];
      this.cityData.like = Boolean(localStorage.getItem('like'));
      
      this.service.addData(this.cityData);
// reload home page to update data automatically
      
      
      this.router.navigate(['/home']).then
      window.location.reload();
    });


  }

  

}
