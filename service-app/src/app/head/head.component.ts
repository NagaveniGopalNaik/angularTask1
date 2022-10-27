import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
 profile='';
  constructor() { }

  ngOnInit(): void {
    this.profile = new Profile().name;
  }

}
