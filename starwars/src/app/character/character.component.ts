import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
people:any=[];


  constructor(private data:DataService) { }

  ngOnInit(): void {
  // this.data.getUsers().subscribe((users)=>{
  //   console.log(users);
    
  // })

  }

  details(index:any){
   

  }

}
