import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IEmployee } from './employee';
import { retry, catchError } from 'rxjs/operators';
// import 'rxjs/add/Observable/throw';
// import 'rxjs/add/Observable/throw';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url :string = "/assets/data/employees.json";
  constructor(private http:HttpClient) { }

  getEmployee():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error:HttpErrorResponse){
    return throwError(error.message || "server error");
  }
}
