import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  template: `
    <p>
      employees works!
    </p>
    <ul style="list-style:none" *ngFor = "let employee of employees" >
    <li (click)="onSelect(employee)" [class.select]="isSelected(employee)">{{employee.name}}</li>
    </ul>
  `,
  styles: [
    `li{
      border:1px solid black;
      padding : 2px;
      width : 20%;
    }
    .select{
      color:white;
      background-color:black;
    }`
  ]
})
export class EmployeesComponent implements OnInit {
  public employees = [
    {"id":1,"name": "John", "age":18},
    {"id":2,"name": "Doe", "age":23},
    {"id":3,"name": "Jane", "age":22},
    {"id":4,"name": "Doe", "age":56},
    {"id":5,"name": "Jane", "age":41},
    {"id":6,"name": "Doe", "age":45},
    {"id":7,"name": "Jane", "age":34},
    {"id":8,"name": "Doe", "age":67},
  ];
  public activeId:any;
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = params.get('id');
      this.activeId= parseInt('id');
      // console.log(typeof(this.activeId));
      
    })
  }

  onSelect(employee:any){
    this.router.navigate(['/employees', employee.id]);
  }

  // isSelected(employee:any){
  //   return employee.id === this.selectId;
  //   // console.log(this.selectId ===employee.id);
    
  // }

  isSelected(employee:any){
    // console.log("e"+employee.id);
    
    return employee.id === this.activeId;
    // console.log(employee.id === this.activeId);
    
  }

}
