import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remove-alert',
  templateUrl: './remove-alert.component.html',
  styleUrls: ['./remove-alert.component.css']
})
export class RemoveAlertComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  
  yes(){
    
    localStorage.setItem('favourite','');
    this.router.navigate(['/favourite']).then
    window.location.reload();

  }

}
