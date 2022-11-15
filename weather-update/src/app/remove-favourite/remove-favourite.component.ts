import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remove-favourite',
  templateUrl: './remove-favourite.component.html',
  styleUrls: ['./remove-favourite.component.css']
})
export class RemoveFavouriteComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  yes(){
    
    localStorage.setItem('favourite','');
    this.router.navigate(['/favourite']).then
    window.location.reload();

  }

}
