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
recentSearch:any;
length:any;
  constructor(private apiService: ApiServiceService,public dialog:MatDialog) { }

  ngOnInit(): void {
    this.apiService.setId(3);
    localStorage.setItem('page','/recent-search');
    this.getData();
  }

  openDialog(){
    this.dialog.open(RemoveRecentSearchComponent,{panelClass:'removeAll'})
  }

  getData(){
    this.recentSearch = JSON.parse(this.apiService.getRecentSearch() || '[]');
    // this.length = this.recentSearch.length;
    // console.log(this.recentSearch);
    
  }

}
