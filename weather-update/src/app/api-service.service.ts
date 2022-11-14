import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

// set api keys
const API_KEY = environment.API_KEY;
const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient:HttpClient) { }

  // get data from the API_URL using API_KEY
  loadData(data:any){
    return this,this.httpClient.get(`${API_URL}/weather?q=${data}&appid=${API_KEY}`);
  }

  getActive(value:any){
    if(localStorage.getItem('active')){
      localStorage.setItem('active',JSON.stringify(value));
    } else{
      localStorage.setItem('active',JSON.stringify(1));
    }
  }
  
}
