import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { WeatherData } from './weather-data';
// set api keys
const API_KEY = environment.API_KEY;
const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  cityData = new WeatherData();
  data: any;
  constructor(private httpClient: HttpClient, private router: Router) {}

  // get data from the API_URL using API_KEY
  loadData(data: any) {
    if (data) {
      this.httpClient
        .get(`${API_URL}/weather?q=${data}&appid=${API_KEY}`)
        .subscribe(
          (result) => {
            this.data = result;

            this.cityData.name = this.data['name'];
            let weatherDetails = this.data['weather'][0];
            let weather = weatherDetails.icon;
            this.cityData.icon = weather;
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
          },
          (error) => {
            alert('City not found');
          }
        );
    } else {
      alert('Ooops! please enter city name');
    }
  }

  getActive(value: any) {
    if (localStorage.getItem('active')) {
      localStorage.setItem('active', JSON.stringify(value));
    } else {
      localStorage.setItem('active', JSON.stringify(1));
    }
  }

  getId() {
    if (localStorage.getItem('id')) {
      return localStorage.getItem('id');
    } else {
      localStorage.setItem('id', JSON.stringify(1));
      return 1;
    }
  }

  setId(id: any) {
    if (localStorage.getItem('id')) {
      localStorage.setItem('id', JSON.stringify(id));
    } else {
      localStorage.setItem('id', JSON.stringify(1));
    }
  }

  getData() {
    if (localStorage.getItem('data')) {
      return localStorage.getItem('data');
    } else {
      localStorage.setItem('data', JSON.stringify(this.cityData));
      return localStorage.getItem('data');
    }
  }

  setData(data: any) {
    if (localStorage.getItem('data')) {
      if (localStorage.getItem('favourite')) {
        let oldData = JSON.parse(localStorage.getItem('favourite') || '[]');
        let previousData = oldData.find((old: any) => {
          return old['name'] == data['name'];
        });
        if (previousData) {
          localStorage.setItem('data', JSON.stringify(previousData));
          this.addRecentSearch(previousData);
        } else {
          localStorage.setItem('data', JSON.stringify(data));
        }
      } else {
        localStorage.setItem('data', JSON.stringify(data));
      }
    } else {
      localStorage.setItem('data', JSON.stringify(this.cityData));
    }
  }

  addRecentSearch(data: any) {
    let list: any[] = [];
    if (localStorage.getItem('recentSearch')) {
      let oldData = JSON.parse(localStorage.getItem('recentSearch') || '[]');
      let previousData = oldData.find((old: any) => {
        return old['name'] == data['name'];
      });

      if (previousData == undefined) {
        list = [data, ...oldData];
      } else {
        let searchData = oldData.indexOf(previousData);
        let currentValue = oldData.splice(searchData, 1)[0];

        // data.like = currentValue.like;
        list = [currentValue, ...oldData];
      }
    } else {
      list = [data];
    }
    localStorage.setItem('recentSearch', JSON.stringify(list));
  }

  updateRecentSearch(data: any) {
    let oldData = JSON.parse(this.getRecentSearch() || '[]');
    let listData = oldData.find((old: any) => {
      return old['name'] == data['name'];
    });

    let index = oldData.indexOf(listData);
    oldData[index] = data;
    localStorage.setItem('recentSearch', JSON.stringify(oldData));
    // this.setData(data);
  }

  getRecentSearch() {
    if (localStorage.getItem('recentSearch')) {
      return localStorage.getItem('recentSearch');
    } else {
      return '[]';
    }
  }

  addfavourite(data: any) {
    let list: any[] = [];
    if (localStorage.getItem('favourite')) {
      let oldData = JSON.parse(localStorage.getItem('favourite') || '[]');
      let previousData = oldData.find((old: any) => {
        return old['name'] == data['name'];
      });
      if (previousData == undefined) {
        list = [data, ...oldData];
      } else {
        let searchData = oldData.indexOf(previousData);
        let currentValue = oldData.splice(searchData)[0];
        // data.like = currentValue.like;
        list = [currentValue, ...oldData];
      }
    } else {
      list = [data];
    }
    localStorage.setItem('favourite', JSON.stringify(list));
  }

  getfavourite() {
    if (localStorage.getItem('favourite')) {
      return localStorage.getItem('favourite');
    } else {
      return '[]';
    }
  }

  removeFavourite(data: any) {
    if (localStorage.getItem('favourite')) {
      let oldData = JSON.parse(localStorage.getItem('favourite') || '[]');
      let presentData = oldData.find((old: any) => {
        return old['name'] == data['name'];
      });
      let index = oldData.indexOf(presentData);
      oldData.splice(index, 1);
      localStorage.setItem('favourite', JSON.stringify(oldData));
    }
  }
}
