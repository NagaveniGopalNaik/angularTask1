import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
public employee_id:any;
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = params.get('id');
      this.employee_id = id;
    })
  }
  goback(){
    let selectedId = this.employee_id?this.employee_id:null;
    this.router.navigate(['../',{id:selectedId}],{relativeTo:this.route});
  }

}
