import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
  
   <ul>
   <li (click)="onSelect(department)" [class.active]="isSelected(department)" *ngFor = "let department of departments">
   <button><span >{{department.id}} </span>{{department.name}}</button>
   </li></ul>
  `,
  styles: [`
  button{
    width:10%;
    padding: 10px;
    margin: 10px;
  }
  .active button{
    background-color:#efe;
    color:#333;
    width:10%;
  }`
  ]
})
export class DepartmentListComponent implements OnInit {
  departments = [
    {"id": "1", "name": "Angular"},
    {"id": "2", "name": "Node"},
    {"id": "3", "name": "MongoDB"},
    {"id": "4", "name": "Ruby"},
    {"id": "5", "name": "Bootstrap"}
  ];
  public activeId:any;
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap) =>{
      let id = params.get("id");
      this.activeId = id;

    })
  }

  onSelect(department:any) {
    // this.router.navigate(['/department',department.id])
    this.router.navigate([department.id],{relativeTo: this.route})
  }

  // active the current working department using some css
  isSelected(department:any){
    return department.id === this.activeId;
  }

}
