import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Profile } from '../profile';
import { MatDialog } from '@angular/material/dialog';
import { ActionsComponent } from '../actions/actions.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
profileFrom : FormGroup;
select1=true;


  constructor(private fb : FormBuilder, private router:Router,public dialog:MatDialog) { }

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
    this.select1=false;
    let dialogRef = this.dialog.open(ActionsComponent,{panelClass: 'custom-modalbox'});
    
    dialogRef.afterClosed().subscribe(()=>{
      this.select1=true;
    })
    
    
    
    
    
  }
  // onSubmit(){

  // }
  goPreview(){
    this.router.navigate(['/preview']);
  }
  
}
