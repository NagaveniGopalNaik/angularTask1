import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  bold=false;
  italic=false;
  color = false;
  bold1=false;
  italic1=false;
  color1 = false;
  text ="";
  text2="";
  permision=false;
  fruit ="";
  employees: any[] = [  
    {  
        code: 'emp1', name: 'Karthik', gender: 'Male',  
        annualSalary: 5500, dateOfBirth: '25/6/1988'  
    },  
    {  
        code: 'emp2', name: 'sachin', gender: 'Male',  
        annualSalary: 5700.95, dateOfBirth: '9/6/1982'  
    },  
    {  
        code: 'emp3', name: 'rahul', gender: 'Male',  
        annualSalary: 5900, dateOfBirth: '12/8/1979'  
    },  
    {  
        code: 'emp4', name: 'Mary', gender: 'Female',  
        annualSalary: 6500.826, dateOfBirth: '14/10/1980'  
    },  
];  

  
  currentClasses :any = {};
  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(){
    let styleUrls = {
      'font-weight':this.bold?'bold':'normal',
      'font-style':this.italic?'italic':'normal',
      'color':this.color?'red':'black'
    }
    return styleUrls;
  }

  onClass(){
    let classes={
      'bold':this.bold1,
      'italic':this.italic1,
      'color':this.color1
    }
    return classes;
  }
  

}
