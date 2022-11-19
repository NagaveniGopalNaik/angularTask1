import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../api.service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
details:any;
index:any;
peopleArray:any;
peopleArrayLength=0;
image=[
  "../../assets/images/films.png",
  "../../assets/images/species.png",
  "../../assets/images/planets.png",
  "../../assets/images/people.png",
  "../../assets/images/vehicle.png",
  "../../assets/images/driod.png"
]

  constructor(private http:DataService) { }

  ngOnInit(): void {
    // this.http.getUsers();
    
  }

  


}
