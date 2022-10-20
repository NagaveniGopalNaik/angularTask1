import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 message : string ="This is the message getting from the child component using view child method";
  data = "abc";
  constructor() { }

  ngOnInit(): void {
  }

}
