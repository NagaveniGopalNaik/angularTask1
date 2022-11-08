import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public favourite:boolean=true;
public favourite1:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
change(){
  
  this.favourite = !this.favourite;
  this.favourite1 = !this.favourite1;
}
}
