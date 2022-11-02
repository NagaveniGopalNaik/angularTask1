import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  term=false;
  agree=false;
  constructor() { }

  ngOnInit(): void {
  }

  agreeMsg(){
    this.agree=!this.agree;
  }

  closeAgreeMsg(){
    this.agree=false;
    
  }

}
