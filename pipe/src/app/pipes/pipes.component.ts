import { Component, OnInit } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
 today : string='';
 name ='';
 age = 0;
 nvalue = 0.100;
 newUser:User[]=[];
 canFly=true;
 referenceSameInstance = false;
  constructor() { this.reset();}

  ngOnInit(): void {
    this.today = new Date().toDateString();
    
  }
  addUser(name:string){
    name = name.trim();

    var newuser = new User();
    newuser.name = name;
    newuser.canFly = this.canFly;

    if(!name){
      return ;
    }
    // this.newUser.push(newuser);
    if(this.referenceSameInstance){
      this.newUser.push(newuser);
    } else{
      this.newUser = this.newUser.concat(newuser);
    }
  }
  reset(){
    this.newUser = [
      {name:"Kripa",canFly:true},
      {name:"Rajani", canFly:true},
      {name:"Ramya",canFly:true}
    ]

  }

}
