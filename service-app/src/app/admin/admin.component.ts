import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
adminForm:FormGroup;
adminData:any;
  constructor(private fb: FormBuilder, private service:ServerService) { }

  ngOnInit(): void {

    this.adminForm = this.fb.group({
      'name':[''],
      'employeeCode':[''],
      'mailId':['']
    })

    this.service.getAdmin().subscribe((data)=>{
      this.adminData = data;
      
    });
  }

  
 
get details(){
  return this.service.getAdmin().subscribe((data)=>{
    this.adminData = data;
    
    
    
  });
}
  addAdmin(){
    const adminDetails = {name:this.adminForm.get('name')?.value,employeeCode:this.adminForm.get('employeeCode')?.value,mailId:this.adminForm.get('mailId')?.value}
    console.log(adminDetails);
    
    this.service.addAdmin(adminDetails).subscribe((data)=>{
      this.details;
  
      alert("done")
    this.adminForm.reset();
    });

    
  }
  deleteAdmin(value:any){
    this.service.deleteAdmin(value).subscribe((data)=>{
      this.details;
    });
    

  }
  editAdmin(id:any,name:any,empCode:any,mailId:any){
    
    const updateDetails={name:name,employeeCode:empCode,mailId:mailId};
    this.service.updateAdmin(id,updateDetails).subscribe(()=>
    alert('updated successfully'));
   
    
  }

  updateData(id:any,name:any,empCode:any,mailId:any){
   
      const updateDetails={name:name,employeeCode:empCode,mailId:mailId};
    this.service.updateAdmin(id,updateDetails).subscribe(()=>
    alert('updated successfully'));
    
  }

}
