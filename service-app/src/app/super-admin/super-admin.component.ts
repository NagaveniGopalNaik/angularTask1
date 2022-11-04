import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ServerService } from '../server.service';
import { SuperAdmin } from '../super-admin';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit {
superAdmin:FormGroup;
updatesuperAdmin:FormGroup;
admin_details:any;
name='';
employeeCode='';
mailId='';

  constructor(private fb:FormBuilder,private service:ServerService) { }

  ngOnInit(): void {
    this.superAdmin = this.fb.group({
      name:[''],
      employeeCode:[''],
      mailId:[''],
      // 'details':this.fb.array([this.superAdminUpdate()])
    });
    this.updatesuperAdmin = this.fb.group({
      name:[''],
      employeeCode:[''],
      mailId:[''],
      
    });

    this.service.getSuperAdmin().subscribe((data)=>{
      this.admin_details = data
    console.log(this.admin_details);

    })
    
    

    
  }
  

  // superAdminUpdate(){
  //   return this.fb.group({
  //     'admin_name':['adsf'],
  //     'admin_employeeCode':[],
  //     'admin_mailId':[]
  //   })
  // }
get details(){
  return this.service.getSuperAdmin().subscribe((data)=>{
    this.admin_details = data;
    
  });
}
  addAdmin(){
    const adminDetails = {name:this.superAdmin.get('name')?.value,employeeCode:this.superAdmin.get('employeeCode')?.value,mailId:this.superAdmin.get('mailId')?.value}
    console.log(adminDetails);
    
    this.service.addSuperAdmin(adminDetails).subscribe((data)=>{
      this.details;
  
      alert("done")
      console.log(data)
    });

    
  }
  deleteAdmin(value:any){
    this.service.deleteAdmin(value).subscribe((data)=>{
      this.details;
    });
    

  }
  editAdmin(id:any){
    const adminDetails = {name:this.name,employeeCode:this.employeeCode,mailId:this.mailId};
    console.log(adminDetails);
    // console.log(form);
    
    
    
    
    
  }

}
