import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiServiceService } from '../api-service.service';
import { RemoveRecentSearchComponent } from '../remove-recent-search/remove-recent-search.component';
@Component({
  selector: 'app-recent-search',
  templateUrl: './recent-search.component.html',
  styleUrls: ['./recent-search.component.css']
})
export class RecentSearchComponent implements OnInit {

  constructor(private apiService: ApiServiceService,public dialog:MatDialog) { }

  ngOnInit(): void {
    this.apiService.setId(3);
  }

  openDialog(){
    this.dialog.open(RemoveRecentSearchComponent,{panelClass:'removeAll'})
  }

}
