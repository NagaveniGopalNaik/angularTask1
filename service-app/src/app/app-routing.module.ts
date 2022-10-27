import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CheckMailComponent } from './check-mail/check-mail.component';
const routes: Routes = [
  {path :'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'checkMail',component:CheckMailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
export  const RoutingComponents = [HomeComponent,LoginComponent,CheckMailComponent];
