import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
peopleData:any;
dataArray:any;
currentData:any;
displayCharacter :any=true;
displayDetails:any=false;
newImage:any;
image_index=1;
films:any;
films_list:any[]=[];
vehicle:any;
vehicle_list:any[]=[];
starship:any;
starship_list:any[]=[];
species:any;
species_list:any[]=[];
url='https://swapi.dev/api/people/';
  constructor(private http:DataService) { }

  ngOnInit(): void {
   
   this.fetchData();
  //  for(let data of this.dataArray.species){
     
  //  }
  
  
   this.changeImage(this.image_index);
  }
  changeImage(index:any){
    this.newImage = `https://picsum.photos/500/300?random=${this.image_index}`;
  }
  
  fetchData(){
    this.http.getUsers(this.url).subscribe((data)=>{
      this.peopleData = data;
      this.dataArray = this.peopleData.results;
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
   let list = data.films;
   let vehicleData = data.vehicles;
   
   let starshipData = data.starships;
    let speciesData = data.species;
  
   
    // for(let data of this.dataArray){
      for(let value of list){
        this.http.getUsers(value).subscribe((result)=>{
          this.films = result;
          this.films = this.films['title'];
          this.films_list.push(this.films);
          
        })
        
      };
      for(let value of vehicleData){
        this.http.getUsers(value).subscribe((result)=>{
          this.vehicle = result;
          this.vehicle = this.vehicle['name'];
          this.vehicle_list.push(this.vehicle);
        })
      }

      for(let value of starshipData){
        this.http.getUsers(value).subscribe((result)=>{
          this.starship = result;
          this.starship = this.starship['name'];
          this.starship_list.push(this.starship);
        })
      }

      for(let value of speciesData){
        this.http.getUsers(value).subscribe((result)=>{
          this.species = result;
          this.species = this.species['name'];
          
          this.species_list.push(this.species);
        })
      }

      
    // }
    
  }
  back_to_character(){
    this.displayCharacter = true;
    this.displayDetails = false;
    this.films_list=[];
    this.vehicle_list=[];
    this.starship_list=[];
    this.species_list=[];
  }

  previous(){
    this.url = this.peopleData.previous;
    this.fetchData();
    
  }
  next(){
    this.url = this.peopleData.next;
    this.fetchData();
  }

}
