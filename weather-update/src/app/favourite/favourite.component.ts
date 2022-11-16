import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { RemoveFavouriteComponent } from '../remove-favourite/remove-favourite.component';
@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
id:any;
fevouriteData:any;
length:any;
  constructor(private http:ApiServiceService,public dialog:MatDialog,private router:Router) { }

  ngOnInit(): void {
    this.id = this.http.setId(2);
    localStorage.setItem('page','/favourite');
    this.getData();
    
    
  }

  openDialog(){
    this.dialog.open(RemoveFavouriteComponent,{panelClass:'alert-remove'});
  }
  getData(){
    this.fevouriteData = JSON.parse(this.http.getfavourite() || '[]');
    this.length = this.fevouriteData.length;
  }

  removeFavourite(fev:any){
    fev['like']=false;
    this.http.removeFavourite(fev);
    this.http.updateRecentSearch(fev);
    this.getData();
  }

  details(data:any){

    this.http.setData(data);

    this.getData();
    this.router.navigate(['/home']);
  }
}
