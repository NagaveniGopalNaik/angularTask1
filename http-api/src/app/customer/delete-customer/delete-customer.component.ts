import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

  constructor( private us:UsersService) { }

  ngOnInit(): void {
  }

  deleteCustomer(id:any){
    this.us.deleteUser(id).subscribe(data=>console.log(data),(err)=>console.log(err))
  };

}
