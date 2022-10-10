import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { FeaturesComponent } from "./features/features.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'features', component: FeaturesComponent},
  {path: '**', component: FeaturesComponent}

];

export const appRoutingProviders: unknown[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
