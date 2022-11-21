import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-planets-charactor',
  templateUrl: './planets-charactor.component.html',
  styleUrls: ['./planets-charactor.component.css']
})
export class PlanetsCharactorComponent implements OnInit {
  planetData:any;
  dataArray:any;
  currentData:any;
  displayCharacter:any = true;
  displayDetails:any=false;
  newImage:any;
  image_index=1;
  residents:any;
  residents_list:any[]=[];
  film:any;
  film_list:any[]=[];

  url='https://swapi.dev/api/planets';
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
    this.planetData = data;
    this.dataArray = this.planetData.results;
   
    
  })
}
fetchDatas(data:any){
 
  let filmData = data.films;
  let residentsData = data.residents;

  for(let value of filmData){
    this.http.getUsers(value).subscribe((result)=>{
      this.film = result;
      this.film = this.film['title']
      this.film_list.push(this.film);

    })
  }

  for(let value of residentsData){
    this.http.getUsers(value).subscribe((result)=>{
      this.residents = result;
      this.residents = this.residents['name']
      this.residents_list.push(this.residents);

    })
  }
  

}
  dataDetails(index:any){
    this.displayDetails=true;
    this.displayCharacter=false;
    this.image_index +=1;
    this.changeImage(this.image_index);
    this.currentData = this.dataArray[index];
    this.fetchDatas(this.currentData);
    
  }

  back_to_character(){
    this.displayCharacter = true;
    this.displayDetails = false;
    this.film_list=[];
    this.residents_list=[];
  }

  previous(){
    this.url = this.planetData.previous;
    this.fetchData()
  }
  next(){
    this.url = this.planetData.next;
    this.fetchData();
  }
}
