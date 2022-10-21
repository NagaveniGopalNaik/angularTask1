import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';

// import {Login} from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //to add ! mark to avoid initializer error 
  loginForm !: FormGroup;
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      'username':[''],
      'password':['']
    });
  }

  onSubmit(){
    console.log('add success');
    // const login = new Login("service",'12345');
    
    
    
    
  }

}
