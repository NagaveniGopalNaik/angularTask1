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
url='https://swapi.dev/api/vehicles';
  constructor(private http:DataService) { }

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData(){
    this.http.getUsers(this.url).subscribe((data)=>{
      this.vehicleData = data;
      this.dataArray = this.vehicleData.results;
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
    this.url = this.vehicleData.previous;
    this.fetchData();
  }

  next(){
    this.url = this.vehicleData.next;
    this.fetchData();
  }

}
