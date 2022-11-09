import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
date:any;
id:any;
// display=true;
navDisplay=false;
search=false;
search1=true;
home=true;
fev=true;
recent=false;
fev1=false;
textFocus=false;
mobileMedia:any=window.matchMedia("('max-width:500')");




  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.date = new Date();
    this.route.queryParams.subscribe(data=>this.id=data['id']);
    this.fev = false;
    console.log(this.mobileMedia);
    
    // console.log(this.id);
   
    // if(this.mobileMedia){
    //   console.log(1);
      
    //   if(this.id == 2){
    //     this.home = false;
    //     this.fev = true;
    //     this.fev1 = true;
    //     this.recent = false;
    //   } else if(this.id == 3) {
    //     this.home=false;
    //     this.fev = true;
    //     this.recent = true;
    //     this.fev1 = false;
    //   } else {
    //     this.fev = false;
    //     this.home = true;
    //   this.fev1=false;
    // this.recent = false;}
    // } else { 
    //   this.fev = false;
    //   this.fev1=false;
    //   this.recent = false;
    //   this.home = true; }
    
    
  }

  clearBtn(){
    this.textFocus = true;
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
  
  }

  gotoFavorite(){
    // debugger;
    this.fev1=true;
    this.recent= false;
    if(this.mobileMedia){
      this.home=false;
      this.fev= true;
      
    
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
