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
url='https://swapi.dev/api/films/';
  constructor(private http:DataService) { }

  ngOnInit(): void {
this.fetchData();
    
  }
fetchData(){
  this.http.getUsers(this.url).subscribe((data)=>{
    this.filmData = data;
    this.dataArray = this.filmData.results;
    console.log(this.filmData);
    
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
    this.url = this.filmData.previous;
    this.fetchData();
    
  }
  next(){
    this.url = this.filmData.next;
    this.fetchData();
  }

}
