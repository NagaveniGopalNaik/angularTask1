import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
date:any;
// display=true;
navDisplay=false;
search=false;
search1=true;
home=true;
fev=false;
recent=false;
fev1=false;
mobileMedia:any=window.matchMedia("(max-width:500)");




  constructor() { }

  ngOnInit(): void {
    this.date = new Date();
    
  }
  navDisplayPermission(){
    if(this.mobileMedia){
      
      this.fev= false;
    this.home=true;
    
    } else{
      this.fev=false;
      this.home=true;
    }
    
    // this.display=!this.display;
    this.navDisplay = !this.navDisplay;
  }

  searchBar(){
    this.search=true;
    this.search1=false;
  }
  backHome(){
    this.search = false;
    this.search1 = true;
    
    
  }

  clear(){

  }
  gotoHome(){
  this.home=true;
  this.fev= false;
  // this.recent= false;
  }

  gotoFavorite(){
    this.fev1=true;
    this.recent= false;
    if(this.mobileMedia){
      
      this.fev= true;
      
    this.home=false;
    
    } else{
      this.fev=false;
      this.home=true;
    }
    
  }
  gotoRecentSearch(){
    this.recent= true;
    this.fev1=false;
    if(this.mobileMedia){
      this.home=false;
      this.fev= true;
      
    
    } else{
      this.fev=false;
      this.home=true;
    }
  }
    


}
