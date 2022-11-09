import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RemoveRecentSearchComponent } from '../remove-recent-search/remove-recent-search.component';
@Component({
  selector: 'app-recent-search',
  templateUrl: './recent-search.component.html',
  styleUrls: ['./recent-search.component.css']
})
export class RecentSearchComponent implements OnInit {
  public favourite:boolean=true;
  public favourite1:boolean=false;
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  change(){
  
    this.favourite = !this.favourite;
    this.favourite1 = !this.favourite1;
  }

  onpenDialog(){
    this.dialog.open(RemoveRecentSearchComponent,{panelClass:'removeAll'});
  }
  

}


