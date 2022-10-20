import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeesComponent } from './employees/employees.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './signup/signup.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
const routes: Routes = [
  {path:'',redirectTo:'departments',pathMatch:'full'},
  {path:'departments',component:DepartmentsComponent},
  {path:'employees',component:EmployeesComponent},
  {path:'employeeForm',component:RegisterFormComponent},
  {path:'departments/:id',component:DepartmentDetailsComponent},
  {path:'employees/:id',component:EmployeeDetailsComponent},
  {path:'signup',component:SignupComponent},
  {path:'**',component:PageNotFoundComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentsComponent,EmployeesComponent,DepartmentDetailsComponent,EmployeeDetailsComponent,PageNotFoundComponent,SignupComponent,RegisterFormComponent]
