import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employees : any = [];
  public errorMsg ="";
  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployee()
    .subscribe(data => this.employees = data,
      error => this.errorMsg = error);
      
  }

}
