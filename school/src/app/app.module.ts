import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { DepartmentsComponent } from './departments/departments.component';
// import { EmployeesComponent } from './employees/employees.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
// import { DepartmentDetailsComponent } from './department-details/department-details.component';
 import {AngularMaterialModule} from './angular-material/angular-material.module';
 
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SignupComponent,
    EmployeeFormComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
