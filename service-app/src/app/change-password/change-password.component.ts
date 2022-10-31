import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  loginForm !: FormGroup
  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      'username':[''],
      'password':['']
    });
  }
  onUpdate(){
    console.log('update successfully');
    this.router.navigate(['./home']);
    
  }
  close(){
    this.router.navigate(['/home'])
  }

}
