import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getUsers(refresh?: boolean):Observable<HttpResponse<any>>{
    return this.http.get<HttpResponse<any>>('https://swapi.dev/api/people');
  }

  getFilms(refresh?: boolean):Observable<HttpResponse<any>>{
    return this.http.get<HttpResponse<any>>('https://swapi.dev/api/films');
  }

  getPlanets(refresh?: boolean):Observable<HttpResponse<any>>{
    return this.http.get<HttpResponse<any>>('https://swapi.dev/api/planets');
  }

  getSpecies(refresh?: boolean):Observable<HttpResponse<any>>{
    return this.http.get<HttpResponse<any>>('https://swapi.dev/api/species');
  }

  getStarship(refresh?: boolean):Observable<HttpResponse<any>>{
    return this.http.get<HttpResponse<any>>('https://swapi.dev/api/starships');
  }

  getVehicles(refresh?: boolean):Observable<HttpResponse<any>>{
    return this.http.get<HttpResponse<any>>('https://swapi.dev/api/vehicles');
  }
  

}

