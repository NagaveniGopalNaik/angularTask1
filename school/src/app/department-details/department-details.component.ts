import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
public department_id:any;
public value:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap) =>{
      // this.value = params;
      
      
      // let value = JSON.stringify(params);
      // // console.log(value);

      // value = JSON.parse(value);
      // console.log(value);
      // console.log(value['id']);
      
      
      
      
      
      
      let id = params.get('id');
      this.department_id = id;
    })
  }

}
