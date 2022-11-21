import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-vehicles-charactor',
  templateUrl: './vehicles-charactor.component.html',
  styleUrls: ['./vehicles-charactor.component.css']
})
export class VehiclesCharactorComponent implements OnInit {
vehicleData:any;
dataArray:any;
currentData:any;
displayCharacter :any=true;
displayDetails:any=false;
newImage:any;
image_index=1;
films:any;
  films_list:any[]=[];
  people:any;
  people_list:any[]=[];

url='https://swapi.dev/api/vehicles';
  constructor(private http:DataService) { }

  ngOnInit(): void {
    this.fetchData();
    this.changeImage(this.image_index);
    // this.newImage.src = "image.jpg?t=" + new Date().getTime();
  }
  fetchData(){
    this.http.getUsers(this.url).subscribe((data)=>{
      this.vehicleData = data;
      this.dataArray = this.vehicleData.results;
   
      
    })
  }

  changeImage(index:any){
    this.newImage = `https://picsum.photos/500/300?random=${this.image_index}`;
  }

  dataDetails(index:any){
    this.displayDetails=true;
    this.displayCharacter=false;
    this.image_index +=1;
    this.changeImage(this.image_index);
    this.currentData = this.dataArray[index];
    this.fetchDatas(this.currentData);
  }

  fetchDatas(data:any){
    
    let filmsData = data.films;
    let peopleData = data.pilots;

    for(let film of filmsData){
      this.http.getUsers(film).subscribe((result)=>{
        this.films = result;
        this.films = this.films['title'];
        this.films_list.push(this.films);
      })
    }

    for(let people of peopleData){
      this.http.getUsers(people).subscribe((result)=>{
        this.people = result;
        this.people = this.people['name'];
        this.people_list.push(this.people);
      })
    }
    
  }

  back_to_character(){
    this.displayCharacter = true;
    this.displayDetails = false;
    this.films_list=[];
    this.people_list=[];
  }

  previous(){
    this.url = this.vehicleData.previous;
    this.fetchData();
  }

  next(){
    this.url = this.vehicleData.next;
    this.fetchData();
  }

}
