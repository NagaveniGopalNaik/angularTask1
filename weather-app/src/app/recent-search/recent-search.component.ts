import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-search',
  templateUrl: './recent-search.component.html',
  styleUrls: ['./recent-search.component.css']
})
export class RecentSearchComponent implements OnInit {
  public favourite:boolean=true;
  public favourite1:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  change(){
  
    this.favourite = !this.favourite;
    this.favourite1 = !this.favourite1;
  }
  

}


