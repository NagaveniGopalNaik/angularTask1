import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit{
  message = "child 2 data";
  text = '';
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    
    this.service.share.subscribe(x=>
      // debugger;
      this.text = x
    );


  }
  

}
