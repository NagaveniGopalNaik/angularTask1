import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
employees:any;
  constructor(private es : EmployeeService) { }

  ngOnInit(): void {
    this.es.getEmployee().subscribe((data)=>{
      this.employees = data;
    })
  }
   

}
