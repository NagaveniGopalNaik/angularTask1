import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-remove-favourite',
  templateUrl: './remove-favourite.component.html',
  styleUrls: ['./remove-favourite.component.css']
})
export class RemoveFavouriteComponent implements OnInit {

  constructor(private router:Router,private http:ApiServiceService) { }

  ngOnInit(): void {
  }

  yes(){
    if(localStorage.getItem('favourite')){
      let oldData = JSON.parse(this.http.getfavourite() || '[]');
      for(let data of oldData){
        data.like = false;
        this.http.updateRecentSearch(data);
      }
    }
    localStorage.removeItem('favourite');

    // this.router.navigate(['/favourite']).then
    // window.location.reload();

  }

}
