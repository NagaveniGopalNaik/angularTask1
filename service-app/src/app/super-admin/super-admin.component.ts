import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
local_details:any=[];
admin_details:any;
delete_details=[];
// super_Admin=new SuperAdmin();



  constructor(private fb:FormBuilder,private service:ServerService,private router:Router) { }

  ngOnInit(): void {
    this.superAdmin = this.fb.group({
      name:[''],
      employeeCode:[''],
      mailId:['']
    });

    this.service.getSuperAdmin().subscribe((data)=>{
      this.admin_details = data;
      // this.local_details = this.admin_details;
      // this.local_details['flag']=false;
      
    });

  
    

    
  }
  

 
get details(){
  return this.service.getSuperAdmin().subscribe((data)=>{
    this.admin_details = data;
    // this.local_details = this.admin_details;
    // this.local_details['flag']=false;
    
    
    
  });
  
}

  addAdmin(){
    const adminDetails = {name:this.superAdmin.get('name')?.value,employeeCode:this.superAdmin.get('employeeCode')?.value,mailId:this.superAdmin.get('mailId')?.value}
    // console.log(adminDetails);
    
    
    // this.local_details.push(adminDetails);
    this.service.addSuperAdmin(adminDetails).subscribe((data)=>{
      this.details;
  
      alert("done")
    this.superAdmin.reset();
    });
    
  }
  deleteAdmin(id:any){
    if (!confirm('Are you sure?')) {
      return;
    }
    // this.local_details.map((item,index) => {
    //   if(item.id == id){
        
        
    //     this.local_details.splice(index,1);
        
    //   }
      
    // });

    this.admin_details.map((item,index) => {
      if(item.id == id){
        
        
        const val = this.admin_details.splice(index,1);
        this.delete_details.push(val);
        console.log(val);
      }
      
    });
    
    
    // this.admin_details.delete(value);
  }
  // editAdmin(id:any,name:any,empCode:any,mailId:any){
    
  //   const updateDetails={name:name,employeeCode:empCode,mailId:mailId};
  //   this.service.updateSuperAdmin(id,updateDetails).subscribe(()=>
  //   alert('updated successfully'));
   
    
  // }

  updateData(id:any,name:any,empCode:any,mailId:any){
   
      const updateDetails={name:name,employeeCode:empCode,mailId:mailId,id:id};
      confirm('are you realy update this document');
      this.local_details.push(updateDetails);
      
    
    // this.local_details.map((item,index) => {
    //   if(item.id == id){
        
    //     this.local_details[index]=updateDetails;
        
    //     alert('updated successfully');
    //     this.local_details['flag']=true;
        
    //   }
      
    // });
    
    
  }
  
  update(){
    // console.log(this.local_details);
    
    
    // for(let details of this.admin_details){
      for(let data of this.local_details){
        
           
            this.service.updateSuperAdmin(data.id,data).subscribe(()=>
            alert(`${data.id} updated successfully`));
            
            
            
  
          // if(details.id !== data.id){
          //   this.service.deleteSuperAdmin(details.id).subscribe((data)=>{
          //     alert(`${details.id} deleted successfully`);
          //     this.details;
          //   });
          // }
    };
    this.delete_details.map((data,index)=>{
      this.service.deleteSuperAdmin(data[index].id).subscribe((data)=>{
        alert(` deleted successfully`);
        this.details;
      });
    });
    
    
      
      
    
        
      // }
    

  }
  clear(){
    this.local_details = [];
    this.delete_details = [];
    this.details;
    

  }

}
