import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url=[
    'https://swapi.dev/api/people',
    'https://swapi.dev/api/films',
    'https://swapi.dev/api/starships',
    'https://swapi.dev/api/vehicles',
    'https://swapi.dev/api/species',
    'https://swapi.dev/api/planets'
  ]
  constructor(private http:HttpClient) { }

  getUsers(url:any):Observable<HttpResponse<any>>{
    return this.http.get<HttpResponse<any>>(url);
  }

  // getUsers(){
  //   return this.http.get('https://swapi.dev/api/people/');
  // }


  // storePeople(data:any){
  //   let list = []
  //   if(localStorage.getItem('people')){
  //     let olddata = JSON.parse(localStorage.getItem('people')as any); 
  //     list = [...olddata,data];
  //   } else{
  //     list = [data]
  //   }
  //   localStorage.setItem('people',JSON.stringify(list));
  // }

  // getPeople(){
  //   if(localStorage.getItem('people')){
  //     return JSON.parse(localStorage.getItem('people')as any)
  //   } else {
  //     return JSON.parse('[]');
  //   }
  // }

  
  

}

