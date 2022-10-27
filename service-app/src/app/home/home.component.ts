import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let userProfile = new Profile();
  }

}
