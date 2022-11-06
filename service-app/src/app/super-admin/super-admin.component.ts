import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ServerService } from '../server.service';
// import { SuperAdmin } from '../super-admin';
// import { NgForm } from '@angular/forms';
// import { from } from 'rxjs';
// import { __values } from 'tslib';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit {
superAdmin:FormGroup;

admin_details:any;
// super_Admin=new SuperAdmin();



  constructor(private fb:FormBuilder,private service:ServerService) { }

  ngOnInit(): void {
    this.superAdmin = this.fb.group({
      name:[''],
      employeeCode:[''],
      mailId:['']
    });

    this.service.getSuperAdmin().subscribe((data)=>{
      this.admin_details = data;
    });
  

    
  }
  

 
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
    this.superAdmin.reset();
    });

    
  }
  deleteAdmin(value:any){
    this.service.deleteSuperAdmin(value).subscribe((data)=>{
      this.details;
    });
    

  }
  editAdmin(id:any,name:any,empCode:any,mailId:any){
    
    const updateDetails={name:name,employeeCode:empCode,mailId:mailId};
    this.service.updateSuperAdmin(id,updateDetails).subscribe(()=>
    alert('updated successfully'));
   
    
  }

  updateData(id:any,name:any,empCode:any,mailId:any){
   
      const updateDetails={name:name,employeeCode:empCode,mailId:mailId};
    this.service.updateSuperAdmin(id,updateDetails).subscribe(()=>
    alert('updated successfully'));
    
  }
 
}
