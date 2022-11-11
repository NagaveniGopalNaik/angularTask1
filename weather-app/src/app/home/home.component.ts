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
