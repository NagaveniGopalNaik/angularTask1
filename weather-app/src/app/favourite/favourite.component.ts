import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RemoveAlertComponent } from '../remove-alert/remove-alert.component';
@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
fevourite:any=[]
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.fevourite = localStorage.getItem('fevourite');
    console.log(this.fevourite);
    
    this.dialog.open(RemoveAlertComponent,{panelClass:'alert-remove'});
  }
  backHome(){
    
  }

}
