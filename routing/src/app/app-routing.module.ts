import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GreetComponent } from './public/greet/greet.component';
import { InfoComponent } from './public/info/info.component';
import { PublicComponent } from './public/public.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentComponentComponent } from './department-component/department-component.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {path : '',redirectTo:'/department',pathMatch:'full'},
  {path : 'department',
  component: DepartmentListComponent,
  canActivate:[AuthGuard]
  },
  {path : 'department/:id',component:DepartmentDetailsComponent,
children:[
  {path:'overview',component:DepartmentOverviewComponent},
  {path:'contact',component:DepartmentComponentComponent}
]},
  {path : 'employees',component: EmployeeListComponent},
  {path : 'auth' , component: AuthComponent,children:[
    {path:'login',component: LoginComponent},
    {path: 'signup', component: SignupComponent}
    
  ]},
  {path : 'public',component: PublicComponent,children:[
    {path:'greet',component: GreetComponent},
    {path:'info',component:InfoComponent}
  ]},
  {path : '**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent, EmployeeListComponent,
  PageNotFoundComponent,DepartmentDetailsComponent,DepartmentComponentComponent,DepartmentOverviewComponent];
