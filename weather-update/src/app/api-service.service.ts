import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { WeatherData } from './weather-data';
// set api keys
const API_KEY = environment.API_KEY;
const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
cityData=new WeatherData();
data:any;
  constructor(private httpClient:HttpClient,private router:Router
    ) { }

  // get data from the API_URL using API_KEY
  loadData(data:any){
    if(data){
    this.httpClient.get(`${API_URL}/weather?q=${data}&appid=${API_KEY}`).subscribe((result)=>{
      // console.log(Response);
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
       
        this.cityData.like = false;
        
        
      this.setData(this.cityData);
      this.addRecentSearch(this.cityData);
      //  this.router.navigate(['/home']).then
      //   window.location.reload();
      

      
    },(error) => {
      alert("City not found");
    });
  } else{
    alert("Ooops! please enter city name");
  }
  }

  getActive(value:any){
    
    
    if(localStorage.getItem('active')){
      localStorage.setItem('active',JSON.stringify(value));
    } else{
      localStorage.setItem('active',JSON.stringify(1));
    }
  }

  getId(){
    // console.log(id);
    
    if(localStorage.getItem('id')){
      // console.log(id);
      // localStorage.setItem('id',JSON.stringify(id));
       return localStorage.getItem('id');
       
       
    } else { 
      localStorage.setItem('id',JSON.stringify(1));
      return 1;
    }
  }

  setId(id:any){
    if(localStorage.getItem('id')){
      localStorage.setItem('id',JSON.stringify(id));
    } else { 
      localStorage.setItem('id',JSON.stringify(1));
    }
  }

  getData(){
    if(localStorage.getItem('data')){
      return localStorage.getItem('data');
    } else {
      localStorage.setItem('data',JSON.stringify(this.cityData));
      return localStorage.getItem('data');
    }
  }

  setData(data:any){
    
   if(localStorage.getItem('data')){
    //  console.log('hello');
    localStorage.setItem('data',JSON.stringify(data));
   } else {
     localStorage.setItem('data',JSON.stringify(this.cityData));
   }
  }

  addRecentSearch(data:any){
    let list=[];
    if(localStorage.getItem('resentSearch')){
      
      let oldData = JSON.parse(localStorage.getItem('resentSearch') ||'[]');
      list=[data,...oldData];
      
      
    } else {
      list=[data];
    }
    localStorage.setItem('resentSearch',JSON.stringify(list));
  }
  
}
