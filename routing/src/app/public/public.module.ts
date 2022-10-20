import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetComponent } from './greet/greet.component';
import { InfoComponent } from './info/info.component';
import { PublicComponent } from './public.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    GreetComponent,
    InfoComponent,
    PublicComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PublicModule { }
