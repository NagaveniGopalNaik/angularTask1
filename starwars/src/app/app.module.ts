import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CharacterComponent } from './character/character.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiService } from './api.service';
import { ChacheInterceptor } from './chache.interceptor';
import { DataService } from './data.service';
import { FilmsCharactorComponent } from './films-charactor/films-charactor.component';
import { FilmsDetailsComponent } from './films-details/films-details.component';
import { SpeciesCharactorComponent } from './species-charactor/species-charactor.component';
import { SpeciesDetailsComponent } from './species-details/species-details.component';
import { PlanetsCharactorComponent } from './planets-charactor/planets-charactor.component';
import { PlanetsDetailsComponent } from './planets-details/planets-details.component';
import { StarshipsCharactorComponent } from './starships-charactor/starships-charactor.component';
import { SptarshipsDetailsComponent } from './sptarships-details/sptarships-details.component';
import { VehiclesCharactorComponent } from './vehicles-charactor/vehicles-charactor.component';
import { VehiclesDetailsComponent } from './vehicles-details/vehicles-details.component';
import { StarshipsDetailsComponent } from './starships-details/starships-details.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    HeaderComponent,
    FooterComponent,
    CharacterComponent,
    NavbarComponent,
    FilmsCharactorComponent,
    FilmsDetailsComponent,
    SpeciesCharactorComponent,
    SpeciesDetailsComponent,
    PlanetsCharactorComponent,
    PlanetsDetailsComponent,
    StarshipsCharactorComponent,
    SptarshipsDetailsComponent,
    VehiclesCharactorComponent,
    VehiclesDetailsComponent,
    StarshipsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    ApiService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:ChacheInterceptor,
    multi:true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
