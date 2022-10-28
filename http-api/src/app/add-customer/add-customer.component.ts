import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

name='';
email='';
  constructor(private us: UsersService ) { }

  ngOnInit(): void {
   
  }
  addCustomer(formvalue:NgForm){
    let customer = {
      name:formvalue.value.name,
      email:formvalue.value.email
    };
    console.log(formvalue.value);
    this.us.addUser(customer).subscribe(data=>this.us.getUsers().subscribe(),(err)=>console.log("can't post "+err)
    );
    
    
  }
  

}
