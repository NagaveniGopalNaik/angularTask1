import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CharacterComponent } from './character/character.component';
import { FilmsCharactorComponent } from './films-charactor/films-charactor.component';
import { FilmsDetailsComponent } from './films-details/films-details.component';
import { PlanetsCharactorComponent } from './planets-charactor/planets-charactor.component';
import { PlanetsDetailsComponent } from './planets-details/planets-details.component';
import { SpeciesCharactorComponent } from './species-charactor/species-charactor.component';
import { SpeciesDetailsComponent } from './species-details/species-details.component';
import { VehiclesCharactorComponent } from './vehicles-charactor/vehicles-charactor.component';
import { VehiclesDetailsComponent } from './vehicles-details/vehicles-details.component';
import { StarshipsCharactorComponent } from './starships-charactor/starships-charactor.component';
import { StarshipsDetailsComponent } from './starships-details/starships-details.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'details', component: DetailsComponent},
  {path:'character', component: CharacterComponent},
  {path:'films-details',component:FilmsDetailsComponent},
  {path:'films-charactor',component:FilmsCharactorComponent},
  {path:'planets-charactor',component:PlanetsCharactorComponent},
  {path: 'planets-details',component:PlanetsDetailsComponent},
  {path:'species-details',component:SpeciesDetailsComponent},
  {path:'species-charactor',component:SpeciesCharactorComponent},
  {path:'vehicles-charactor',component:VehiclesCharactorComponent},
  {path:'vehicles-details',component:VehiclesDetailsComponent},
  {path:'starship-charactor',component:StarshipsCharactorComponent},
  {path:'starship-details',component:StarshipsDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
