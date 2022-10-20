import { Injectable } from '@angular/core';
import { BehaviorSubject,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  data :string="Gopal Naik";
  private message = new Subject<string>();
  public msg = this.message.asObservable();
private content = new BehaviorSubject<string>("Service");
public share = this.content.asObservable();

  constructor() { }
  updateData(text:any){
    this.content.next(text);
    

  }
  updateData1(text:any){
    this.message.next(text);
  }

  setMessage(data:any){
    this.data = data;
  }

  getMessage(){
    return this.data;
  }
}
