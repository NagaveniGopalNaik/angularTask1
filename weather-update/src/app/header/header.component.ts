import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
date:any;
home=true;
fev=false;
search=false;
search1 = false;
recent=false;
fev1=false;
city='';
width=0;
  constructor() { }

  ngOnInit(): void {
    this.date = new Date();
    this.width=window.innerWidth;

    // if(this.id == 1){
    //   this.home=true;
    // } else if (this.id == 2 && this.width <500){
    //   this.fev1=true;
    // this.recent= false;
    // this.fev = true;
    // this.home = false;
    // } else if(this.id == 3 && this.width < 500){
    //   this.fev1=false;
    // this.recent= true;
    // this.fev = true;
    // this.home = false;
    // }
  }

  navDisplayPermission(){}

  searchBar(){

  }
  clear(){}

  backHome(){}
  submit(){
  
  }
  clearBtn(){}
}
