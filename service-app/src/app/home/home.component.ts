import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Profile } from '../profile';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
profileFrom : FormGroup;
select1=true;
select2=false;

  constructor(private fb : FormBuilder, private router:Router) { }

  ngOnInit(): void {
    // let userProfile = new Profile();
    this.profileFrom = this.fb.group({
      'title':[''],
      'description':[''],
      'button_title':[''],
      'button_text':[''],
      'check_box_text':[''],
      'additional_details':this.fb.group({
        'start_date':[],
        'end_date':[],
        'auto_remainder':[''],
        'ppt_file':[''],
        'participant_xl_sheet':[''],
        'mail_body':['']
  
      })
    })
  }

  select(){
    this.select2=!this.select2;
    this.select1=!this.select1;
  }
  // onSubmit(){

  // }
  goPreview(){
    this.router.navigate(['/preview']);
  }
  
}
