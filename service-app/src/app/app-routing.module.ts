import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CheckMailComponent } from './check-mail/check-mail.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import {PreviewComponent } from './preview/preview.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
const routes: Routes = [
  {path :'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'checkMail',component:CheckMailComponent},
  {path:'changePassword',component:ChangePasswordComponent},
  {path:'preview',component:PreviewComponent},
  {path:'superAdmin',component:SuperAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
export  const RoutingComponents = [HomeComponent,LoginComponent,CheckMailComponent,ChangePasswordComponent,PreviewComponent];
