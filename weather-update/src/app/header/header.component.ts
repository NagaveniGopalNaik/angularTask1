import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  date: any;
  home = true;
  fev = false;
  search = false;
  search1 = true;
  recent = false;
  fev1 = false;
  city = '';
  width = 0;
  id: any;
  navDisplay = false;
  constructor(private http: ApiServiceService, private router: Router) {}

  ngOnInit(): void {
    this.date = new Date();
    this.width = window.innerWidth;
    this.id = this.http.getId();
    console.log(this.id);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.width = window.innerWidth;
    this.findWindowScreen();
  }

  findWindowScreen() {
    if (this.id == 1) {
      this.home = true;
    } else if (this.id == 2) {
      if (this.width < 650) {
        this.fev1 = true;
        this.recent = false;
        this.fev = true;
        this.home = false;
      } else {
        this.fev = false;
        this.home = true;
      }
    } else if (this.id == 3) {
      if (this.width < 650) {
        this.fev1 = false;
        this.recent = true;
        this.fev = true;
        this.home = false;
      } else {
        this.fev = false;
        this.home = true;
      }
    }
  }

  navDisplayPermission() {
    this.fev = false;
    this.home = true;

    this.navDisplay = true;
  }

  searchBar() {
    this.search = true;
    this.search1 = false;
  }
  clear() {}

  backHome() {
    this.search = false;
    this.search1 = true;
  }
  submit() {
    let data = this.http.loadData(this.city);
    this.city = '';
    this.router.navigate(['/home']);
  }
  clearBtn() {}

  @HostListener('document:keydown.enter') submitdata() {
    let data = this.http.loadData(this.city);
    this.city = '';
    this.router.navigate(['/home']);
  }
}
