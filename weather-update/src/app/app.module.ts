import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { RecentSearchComponent } from './recent-search/recent-search.component';
import { RemoveFavouriteComponent } from './remove-favourite/remove-favourite.component';
import { RemoveRecentSearchComponent } from './remove-recent-search/remove-recent-search.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FavouriteComponent,
    RecentSearchComponent,
    RemoveFavouriteComponent,
    RemoveRecentSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
   MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
