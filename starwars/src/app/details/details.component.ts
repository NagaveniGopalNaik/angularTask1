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
url='https://swapi.dev/api/people/';
  constructor(private http:DataService) { }

  ngOnInit(): void {
   
   this.fetchData();
    
  }

  fetchData(){
    this.http.getUsers(this.url).subscribe((data)=>{
      this.peopleData = data;
      this.dataArray = this.peopleData.results;
     //  console.log(this.peopleData);
      
    })
  }

  dataDetails(index:any){
    this.displayDetails=true;
    this.displayCharacter=false;
    this.currentData = this.dataArray[index];
    
  }

  back_to_character(){
    this.displayCharacter = true;
    this.displayDetails = false
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
