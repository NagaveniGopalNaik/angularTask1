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
  url='https://swapi.dev/api/planets';
  constructor(private http:DataService) { }

  ngOnInit(): void {
    this.fetchData();
  }
fetchData(){
  this.http.getUsers(this.url).subscribe((data)=>{
    this.planetData = data;
    this.dataArray = this.planetData.results;
    console.log(this.planetData);
    
  })
}
  dataDetails(index:any){
    this.displayDetails=true;
    this.displayCharacter=false;
    this.currentData = this.dataArray[index];
    
  }

  back_to_character(){
    this.displayCharacter = true;
    this.displayDetails = false;
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
