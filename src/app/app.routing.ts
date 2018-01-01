import { Routes, RouterModule } from '@angular/router';

import {CarListComponent} from "./car-list/car-list.component";
import {CarEditComponent} from "./car-edit/car-edit.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./_guards/auth.guard";

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  // otherwise redirect to home
  { path: '**', redirectTo: '' },
  /*{
    path: '', redirectTo: '/car-list',
    pathMatch: 'full'
  },
  {
    path: 'car-list',
    component: CarListComponent
  },
  {
    path: 'car-add',
    component: CarEditComponent
  },
  {
    path: 'car-edit/:id',
    component: CarEditComponent
  }*/
];

export const routing = RouterModule.forRoot(appRoutes);
