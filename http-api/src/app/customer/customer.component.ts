import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  users:any;
  message:String='';
  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => this.users = data,(err)=>{
      this.message = 'cant fetch this url';
    });
  }

}
