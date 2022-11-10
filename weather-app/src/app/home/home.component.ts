// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
// import { environment } from 'src/environments/environment';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public favourite:boolean=true;
public favourite1:boolean=false;
currentData:any;
data:any;
fevData:any=[];
icon:any;
convert= false;
flag=true;
temp='';
  constructor(private service:WeatherService,private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    // localStorage.setItem('like',String(this.favourite1));
    // console.log(this.data);
    // this.currentData = this.service.data;
    this.currentData = localStorage.getItem('data');
    this.currentData = JSON.parse(this.currentData);
    // this.icon = this.currentData.icon;
    this.temp = (this.currentData.temp).toFixed(0);
    
    // console.log(this.icon);
    

    // console.log(typeof this.currentData);
    
    // console.log(this.currentData['name']);
  }
change(){
  
  this.favourite = !this.favourite;
  this.favourite1 = !this.favourite1;
  localStorage.setItem('like',String(this.favourite1));
  this.currentData.like = true;
  if(localStorage.getItem('favourite')){
    let fevData = [];
    let oldData = JSON.parse(localStorage.getItem('favourite') || '[]');
    fevData = [this.currentData,...oldData]
  }
  localStorage.setItem('favourite',this.fevData);
  
}
celcius(){
  
    this.temp = (Number(this.currentData.temp )- 273.15).toFixed(0);
    
  // }
}
farenheit(){
  // alert("hello");
    this.temp = ((1.8*(Number(this.currentData.temp)- 273.15))+32).toFixed(0);
    
  }

}
