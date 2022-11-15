import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiServiceService } from '../api-service.service';
import { RemoveFavouriteComponent } from '../remove-favourite/remove-favourite.component';
@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
id:any;
currentData:any;
  constructor(private http:ApiServiceService,public dialog:MatDialog) { }

  ngOnInit(): void {
    this.id = this.http.setId(2);
    localStorage.setItem('page','/favourite')
  }

  openDialog(){
    this.dialog.open(RemoveFavouriteComponent,{panelClass:'alert-remove'});
  }
  getData(){
    this.http.getfavourite();
  }
}
