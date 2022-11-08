import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { RecentSearchComponent } from './recent-search/recent-search.component';
const routes: Routes = [
  {path : '',redirectTo:'/home',pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'favourite',component: FavouriteComponent},
  {path:'recent-search',component: RecentSearchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
