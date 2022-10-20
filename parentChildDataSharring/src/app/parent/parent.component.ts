import { Component, OnInit,Input, SimpleChanges, OnChanges } from '@angular/core';
import {ChildComponent} from '../child/child.component';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit ,OnChanges {
  message1: string = '';
  text : string="";
  message2 ="";
  @Input() age : number = 0;
  
  constructor( private service : ServiceService) { }

  
  ngOnInit(): void {
    this.message1 = this.service.getMessage();
    this.service.share.subscribe(x=>this.text = x);
    this.service.msg.subscribe(x=>this.message2=x);
  }

  ngOnChanges(changes:SimpleChanges): void {
    console.log(changes);
    if(changes['age']&&changes['age'].currentValue){
      this.age = this.age-4;
      
    } else{
      this.age = 18;
    }
      
    }
    
}
