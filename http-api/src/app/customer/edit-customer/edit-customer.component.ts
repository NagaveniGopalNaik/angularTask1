import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  constructor(private us: UsersService) { }

  ngOnInit(): void {
  }

  updateCustomer(){
    this.us.updateUser().subscribe((data)=>console.log(data),(err)=>console.log("error occurs"+err));
  }

}
