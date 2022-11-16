import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remove-recent-search',
  templateUrl: './remove-recent-search.component.html',
  styleUrls: ['./remove-recent-search.component.css']
})
export class RemoveRecentSearchComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  yes(){
    
    localStorage.removeItem('recentSearch');
    // this.router.navigate(['/recent-search']).then
    // window.location.reload();

  }

}
