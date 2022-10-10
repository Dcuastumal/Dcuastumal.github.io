import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { FeaturesComponent } from "./features/features.component";

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'features', component: FeaturesComponent},
  {path: '**', component: FeaturesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
