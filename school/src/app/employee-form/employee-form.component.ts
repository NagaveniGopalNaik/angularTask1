import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit,OnChanges {
 employee_Details : FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    // this.employee_Details = new FormGroup({
    //   'employeeName':new FormControl(),
    //   'email' : new FormControl()
    // });
// using formbuilder 
    // this.employee_Details = this.fb.group({
    //   'employeeName':new FormControl(),
    //   'email' : new FormControl()
    // });
// set value on the go
    // this.employee_Details = this.fb.group({
    //   'employeeName':new FormControl('Nagaveni'),
    //   'email' : new FormControl('nagaveni@gmail.com')
    // });

    this.employee_Details = this.fb.group({
      'employeeName':new FormControl('',[
        Validators.minLength(5),
        Validators.maxLength(10),
        Validators.pattern('^[a-zA-Z]+$'),
        Validators.required]),
      'email' : new FormControl('',[Validators.email,
    Validators.required])
    });

    //set value using setValue() method
    // but set value need to pass all the fields
    // const employeeObj ={
    //   // 'employeeName':"Vidya",
    //   'email':"vidya@gmail.com"
    // }
    
    // this.employee_Details.setValue(employeeObj);

    // patchValue() method to set the value
    // same as setValue() method but no need to pass all the fields
    // this.employee_Details.patchValue(employeeObj);
    this.employee_Details.get('employeeName')?.statusChanges.subscribe(data=>{
      console.log("status change");
      console.log(data);
      
    })
  }
  trackFrom(){
    this.employee_Details.get("employeeName")?.valueChanges.subscribe(data =>{
      console.log(data);
      
    });
  }

  ngOnChanges(): void {
    
  }
  addEmployee(){
    
    console.log(this.employee_Details.valueChanges.subscribe(data=>{
      console.log(data);
      
    }));
    ;
    console.log(this.employee_Details.get('employeeName')?.value); 
    
    
  }

  resetForm(){
    this.employee_Details.reset();
  }

}
