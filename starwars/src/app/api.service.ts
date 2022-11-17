import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
data:any;
  constructor(private http:HttpClient) { }

  getData(){
    this.http.get('https://swapi.dev/api/vehicles').subscribe((data)=>{
      this.data = data;
      console.log(this.data);
      
    })
  }
}
