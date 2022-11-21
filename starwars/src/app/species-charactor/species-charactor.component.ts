import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-species-charactor',
  templateUrl: './species-charactor.component.html',
  styleUrls: ['./species-charactor.component.css']
})
export class SpeciesCharactorComponent implements OnInit {
  speciesData:any;
  dataArray:any;
  currentData:any;
  displayCharacter:any = true;
  displayDetails:any=false;
  url='https://swapi.dev/api/species';
  newImage:any;
  image_index=1;
  films:any;
  films_list:any[]=[];
  people:any;
  people_list:any[]=[];

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
    this.speciesData = data;
    this.dataArray = this.speciesData.results;
   
    
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
 
    let filmsData = data.films;
    let peopleData = data.people;

    for(let film of filmsData){
      this.http.getUsers(film).subscribe((result)=>{
        this.films = result;
        this.films = this.films['title'];
        this.films_list.push(this.films);
      })
    }

    for(let person of peopleData){
      this.http.getUsers(person).subscribe((result)=>{
        this.people = result;
        this.people = this.people['name'];
        this.people_list.push(this.people);
      })
    }
  }

  back_to_character(){
    this.displayCharacter = true;
    this.displayDetails = false;
    this.people_list=[];
    this.films_list=[];
  }
  previous(){
    this.url = this.speciesData.previous;
    this.fetchData();
  }
  next(){
    this.url =this.speciesData.next;
    this.fetchData();
  }

}
