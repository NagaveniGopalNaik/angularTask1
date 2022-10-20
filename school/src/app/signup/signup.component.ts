import { Component, HostListener, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../employee';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
//   firstName:string="";
//   terms:boolean=false;
//   gender:string='male';
//   email:string="";
//   professional:string="";
//   password:string="";
//   lastName:string="";
//   address:string="";
//  userDetails:any={};
employeeDetails = new Employee("gopal",true,'male',"a@hgj.com","software trainee","56785","naik","asdf");
 Gender:any=['male','female','other'];
  constructor() { }

  ngOnInit(): void {
  }

  addUser(user:NgForm){
    console.log(user.controls);
    
  }

  loadValue(forValue:NgForm){
    let userDetails = {
      'firstName':'Nagaveni',
      'terms':true,
      'gender':'female',
      'email':'nagaveni@robosoft.com',
      'professional':'trainee',
      'password':'12345',
      'lastName':'Naik',
      'address':"sirsi,Uttrara kannada, karnataka"
    };
    
    forValue.setValue(userDetails);

  }

  // apply HostListener to submit button
  @HostListener('submit') submit(){
    alert("Registration successfull");
  };



  resetForm(forValue:NgForm){
    // forValue.reset();
    forValue.resetForm();
  }
}
