import { Component, OnInit,Input,Output,EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges {
text="";
editText = "";
editText1="";
value = 0;
@Input() name: string = '';
@Input() data:any;
message : string ="This is the message getting from the child component using view child method";

@Output() displayAge  = new EventEmitter();

  constructor( private service : ServiceService) { }
  
  ngOnInit(): void {
    
  }
  
  displayage(value:any){
    this.displayAge.emit(value);
  }
  
  editUser(){
    this.service.updateData(this.editText);
  }
  editUser1(){
    this.service.updateData1(this.editText1);
  }
  ngOnChanges(change:SimpleChanges): void {
    console.log(change);
    
      console.log("value change");
      
    }
    
}
