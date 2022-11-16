import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { RemoveRecentSearchComponent } from '../remove-recent-search/remove-recent-search.component';
@Component({
  selector: 'app-recent-search',
  templateUrl: './recent-search.component.html',
  styleUrls: ['./recent-search.component.css'],
})
export class RecentSearchComponent implements OnInit {
  recentSearch: any;
  length: any;
  constructor(
    private apiService: ApiServiceService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.apiService.setId(3);
    localStorage.setItem('page', '/recent-search');
    this.getData();
  }

  openDialog() {
    this.dialog.open(RemoveRecentSearchComponent, { panelClass: 'removeAll' });
    this.getData();
  }

  getData() {
    this.recentSearch = JSON.parse(this.apiService.getRecentSearch() || '[]');
  }
  addtoFavorite(recent: any) {
    recent['like'] = true;
    this.apiService.addfavourite(recent);
    this.apiService.updateRecentSearch(recent);
    this.getData();
  }

  removeFavourite(recent: any) {
    recent['like'] = false;
    this.apiService.removeFavourite(recent);
    this.apiService.updateRecentSearch(recent);
    this.getData();
  }

  details(data: any) {
    this.apiService.setData(data);
    this.getData();
    this.router.navigate(['/home']);
  }
}
