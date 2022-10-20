import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router ,ParamMap} from '@angular/router';


@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
  public departmentId:any;
  constructor(private route:ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    
    // const id = this.route.snapshot.paramMap.get('id');
    // this.departmentId = id;

    this.route.paramMap.subscribe((params : ParamMap) =>{
      const id = params.get('id');
      
      this.departmentId = id;
    });
  }
  goPrevious(){
    let previousId = parseInt(this.departmentId) - 1;
    this.router.navigate(['/department', previousId]);
  }
  goNext(){
    let nextId = parseInt(this.departmentId) + 1;
    this.router.navigate(['/department', nextId]);
  }
  gotoDepartment(){
    let selectedId = this.departmentId?this.departmentId:null;
    // this.router.navigate(['/department',{id:selectedId}]);
    this.router.navigate(['../',{id:selectedId}],{relativeTo:this.route});
  }
  showOverview(){
    this.router.navigate(['overview'],{relativeTo:this.route});
  }
  showContact(){
    this.router.navigate(['contact'],{relativeTo:this.route});
  }
}

