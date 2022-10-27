import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../login';

// import {Login} from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //to add ! mark to avoid initializer error 
  loginForm !: FormGroup;
  constructor(private fb : FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      'username':[''],
      'password':['']
    });
  }

  onSubmit(){
    
    // if  validation success goto home page

    const login = new Login();
    
    
    let username  = this.loginForm.get('username').value;
    
    
    let password = this.loginForm.get('password').value;
    if(this.loginForm.invalid && username === '' && password === ''){
      console.log('invalid login');
      
    } else {
      if (login.username === username && login.password === password){
        this.router.navigate(['./home']);
      }
    }
    
    
    
    
  }

}
