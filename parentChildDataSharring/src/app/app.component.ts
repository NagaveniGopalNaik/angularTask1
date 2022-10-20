import { Component ,ViewChild,AfterViewInit,OnInit, OnChanges, SimpleChange, SimpleChanges} from '@angular/core';
import { Child2Component } from './child2/child2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit,OnInit{
  title = 'parentChildDataSharring';
  name = "nagaveni";
  value = 0;
  age = 0;
  data = [{'name':'nagaveni',
'age':22}];

message1 = '';
@ViewChild(Child2Component) child !: Child2Component;
ngOnInit(): void {

}

ngAfterViewInit(): void {
  this.message1 = this.child.message;
  // console.log(this.child.message)
}
displayAge(value:any){
  this.age = value;
}
changeAge(){
  this.age = this.value;
}

}
