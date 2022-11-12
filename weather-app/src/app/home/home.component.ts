import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl,
} from '@angular/platform-browser';
import { WeatherData } from '../weather-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public favourite: boolean = true;
  public favourite1: boolean = false;
  currentData: any;
  data: any;
  fevData: any = [];
  icon: any;
  convert = false;
  flag = true;
  temp = '';
  recentSearch: any;
  defalut = new WeatherData();
  constructor(
    private service: WeatherService,
    private _sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
<<<<<<< HEAD
    if (localStorage.getItem('data')) {
      this.currentData = localStorage.getItem('data');
      console.log(this.currentData);
      this.currentData = JSON.parse(this.currentData);
      this.icon = this.currentData.icon;
      this.temp = this.currentData.temp.toFixed(0);
    } else {
      localStorage.setItem('data', JSON.stringify(this.defalut));
    }
  }
  removeLike() {
    this.currentData.like = false;
    let id = Number(localStorage.getItem('id'));
    let recentData = JSON.parse(localStorage.getItem('recentSearch') || '[]');
    let fevorite = JSON.parse(localStorage.getItem('favourite') || '[]');
    let name = this.currentData.name;

    let index = fevorite.map((data: any, index: any) => {
      if (data.name == name) {
        return index;
      }
    });

    if (fevorite.indexOf(name)) {
    }

    fevorite.splice(index, 1);
    if (fevorite.length < 1) {
      localStorage.setItem('favourite', '');
    } else {
      localStorage.setItem('favourite', JSON.stringify(fevorite));
    }

    recentData[id] = this.currentData;

    localStorage.setItem('recentSearch', JSON.stringify(recentData));
=======
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
    
>>>>>>> 8286b8893e531bda6ea8b5be9816bcbd349958d6
  }
  change() {
    this.currentData.like = true;

    let fevData = [];
    if (localStorage.getItem('favourite')) {
      let oldData = JSON.parse(localStorage.getItem('favourite') || '[]');
      fevData = [this.currentData, ...oldData];
    } else {
      fevData = [this.currentData];
    }
    localStorage.setItem('favourite', JSON.stringify(fevData));
    localStorage.setItem('like', String(this.favourite));

    // recent search updated

    if (localStorage.getItem('recentSearch')) {
      let recentData = JSON.parse(localStorage.getItem('recentSearch') || '[]');

      let id = Number(localStorage.getItem('id'));
      recentData[id] = this.currentData;

      localStorage.setItem('recentSearch', JSON.stringify(recentData));
    }
    localStorage.setItem('favourite', JSON.stringify(fevData));
    localStorage.setItem('like', String(this.favourite));
  }
  celcius() {
    this.temp = (Number(this.currentData.temp) - 273.15).toFixed(0);
  }
  farenheit() {
    this.temp = (1.8 * (Number(this.currentData.temp) - 273.15) + 32).toFixed(
      0
    );
  }
}
