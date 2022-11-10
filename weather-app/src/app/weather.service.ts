import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const API_KEY = environment.API_KEY;
const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  constructor(public httpClient:HttpClient) { }

  loadData(data:any){
    return this.httpClient.get(`${API_URL}/weather?q=${data}&appid=${API_KEY}`);
  }

  addData(data:any){
    let datas = [];
    if(localStorage.getItem('recentSearch')){
      let oldData = JSON.parse(localStorage.getItem('recentSearch') || '[]');
      datas = [data,...oldData];
    
    } else {
      datas = [data]
    }
    localStorage.setItem('recentSearch',JSON.stringify(datas));
    localStorage.setItem('data',JSON.stringify(data));
    
  }
}
