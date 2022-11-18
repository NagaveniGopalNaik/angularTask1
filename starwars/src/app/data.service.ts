import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  // getUsers(refresh?: boolean):Observable<HttpResponse<any>>{
  //   return this.http.get<HttpResponse<any>>('https://swapi.dev/api/people');
  // }

  // searchUsers(name:string):Observable<HttpResponse<any>>{
  //   const httpOptions = 
  // }
}
