import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-films-charactor',
  templateUrl: './films-charactor.component.html',
  styleUrls: ['./films-charactor.component.css']
})
export class FilmsCharactorComponent implements OnInit {
filmData:any;
dataArray:any;
currentData:any;
displayCharacter:any = true;
displayDetails:any=false;
newImage:any;
image_index=1;
starship:any;
starship_list:any[]=[];
species:any;
species_list:any[]=[];
planet:any;
planet_list:any[]=[];
vehicle:any;
vehicle_list:any[]=[];

url='https://swapi.dev/api/films/';
  constructor(private http:DataService) { }

  ngOnInit(): void {
this.fetchData();
this.changeImage(this.image_index);
  }
  changeImage(index:any){
    this.newImage = `https://picsum.photos/500/300?random=${this.image_index}`;
  }
fetchData(){
  this.http.getUsers(this.url).subscribe((data)=>{
    this.filmData = data;
    this.dataArray = this.filmData.results;
   
    
  })
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
   
    let starshipData = data.starships;
    let vehicleData = data.vehicles;
    let speciesData = data.species;
    let planetData = data.planets;
    
    for(let value of vehicleData){
      this.http.getUsers(value).subscribe((result)=>{
        this.vehicle = result;
        this.vehicle = this.vehicle['name'];
        this.vehicle_list.push(this.vehicle);
        
      })
      
    };

    for(let value of starshipData){
      this.http.getUsers(value).subscribe((result)=>{
        this.starship = result;
        this.starship = this.starship['name'];
        this.starship_list.push(this.starship);
        
      })
      
    };

    for(let value of speciesData){
      this.http.getUsers(value).subscribe((result)=>{
        this.species = result;
        this.species = this.species['name'];
        this.species_list.push(this.species);
        
      })
      
    };

    for(let value of planetData){
      this.http.getUsers(value).subscribe((result)=>{
        this.planet = result;
        this.planet = this.planet['name'];
        this.planet_list.push(this.planet);
        
      })
      
    };

  }

  back_to_character(){
    this.displayCharacter = true;
    this.displayDetails = false;
  }

  previous(){
    this.url = this.filmData.previous;
    this.fetchData();
    
  }
  next(){
    this.url = this.filmData.next;
    this.fetchData();
  }

}
