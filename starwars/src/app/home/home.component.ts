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
img:any;
image=[
  "../../assets/images/films.png",
  "../../assets/images/species.png",
  "../../assets/images/planets.png",
  "../../assets/images/people.png",
  "../../assets/images/vehicle.png",
  "../../assets/images/driod.png"
];

image_hover=[
  "../../assets/images/fimls-pressed.png",
  "../../assets/images/species-pressed.png",
  "../../assets/images/planet-pressed.png",
  "../../assets/images/charector-pressed.png",
  "../../assets/images/vehicle-pressed.png",
  "../../assets/images/driods-pressed.png"
];

  constructor(private http:DataService) { }

  ngOnInit(): void {
    // this.http.getUsers();
    
  }
  changeImage(index:any){
    this.img = this.image[index];
    this.image[index]=this.image_hover[index];
  }

  rechangeImage(index:any){
    this.image[index]= this.img;
  }
  


}
