import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  key = '';
  value = '';
  data: any;
  data1: any;
  data2: any;
  all: any;
  dis = false;
  obj = { name: 'sharan', age: 45 };
  constructor(private cs: CookieService) {}

  ngOnInit(): void {}
  addObject() {
    localStorage.setItem(this.key, this.value);
    sessionStorage.setItem(this.key, this.value);
    this.cs.set(this.key, this.value);
    this.reset();
  }

  getObject() {
    this.data = localStorage.getItem(this.key);
    this.data1 = sessionStorage.getItem(this.key);
    this.data2 = this.cs.get(this.key);
    //  get all cookie data
    this.all = this.cs.getAll();
    this.dis = true;
    this.reset();
  }

  deleteObject() {
    localStorage.removeItem(this.key);
    sessionStorage.removeItem(this.key);
    this.cs.delete(this.data);
    this.reset();
  }

  clearAll() {
    localStorage.clear();
    sessionStorage.clear();
    this.cs.deleteAll();
    this.dis = false;
  }

  addObjects() {
    let value = JSON.stringify(this.obj);

    localStorage.setItem('data', value);
    sessionStorage.setItem('data', value);
    this.cs.set('data', value);
  }
  reset() {
    this.key = '';
    this.value = '';
  }
}
