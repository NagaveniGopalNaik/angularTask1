import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustompipePipe } from './custompipe.pipe';
import { FormsModule } from '@angular/forms';
import { AgePipe } from './age.pipe';
import { UserPipe } from './user.pipe';
import {UserImpurePipe} from './user.pipe';
import { DirectivesComponent } from './directives/directives.component';
@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    CustompipePipe,
    AgePipe,
    UserPipe,
    UserImpurePipe,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
