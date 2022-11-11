import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RemoveAlertComponent } from '../remove-alert/remove-alert.component';
@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  currentData:any;
  data=false;
  data1 = false;
  length = 0;
  constructor(public dialog:MatDialog,private router : Router) { }

  ngOnInit(): void {
   this.datas();
   
  }
  datas(){
    if(localStorage.getItem('favourite')){
      this.currentData = localStorage.getItem('favourite');
    this.currentData = JSON.parse(this.currentData);
    this.length = this.currentData.length;
    
    }
    else{
    this.length = 0;
    }
    
    if(this.length <= 0){
      this.data = true;
    } else {
      this.data1 = true; 
    }
  }

  openDialog(){
  
    
    this.dialog.open(RemoveAlertComponent,{panelClass:'alert-remove'});
    if(localStorage.getItem('favourite')){
      this.currentData = localStorage.getItem('favourite');
    this.currentData = JSON.parse(this.currentData);
    this.length = this.currentData.length;
    
    }
    else{
    this.length = 0;
    }
    
    if(this.length < 1){
      this.data = true;
      this.data1 = false;
    } else {
      this.data1 = true; 
      this.data=false
    }

   
  }
  backHome(){
    
  }

}
