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
  constructor(private http:DataService) { }

  ngOnInit(): void {
    this.fetchData();
   
  }
fetchData(){
  this.http.getUsers(this.url).subscribe((data)=>{
    this.speciesData = data;
    this.dataArray = this.speciesData.results;
    console.log(this.speciesData);
    
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
    this.url = this.speciesData.previous;
    this.fetchData();
  }
  next(){
    this.url =this.speciesData.next;
    this.fetchData();
  }

}
