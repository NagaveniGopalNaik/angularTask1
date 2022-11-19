import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-starships-charactor',
  templateUrl: './starships-charactor.component.html',
  styleUrls: ['./starships-charactor.component.css']
})
export class StarshipsCharactorComponent implements OnInit {
  starshipData:any;
  dataArray:any;
  currentData:any;
  displayCharacter:any = true;
  displayDetails:any=false;
  url='https://swapi.dev/api/starships';
  constructor(private http:DataService) { }

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData(){
    this.http.getUsers(this.url).subscribe((data)=>{
      this.starshipData = data;
      this.dataArray = this.starshipData.results;
      console.log(this.starshipData);
      
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
    this.url = this.starshipData.previous;
    this.fetchData();
  }
  next(){
    this.url = this.starshipData.next;
    this.fetchData();
  }
}
