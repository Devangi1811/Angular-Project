import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninComponent} from '../app/components/signin/signin.component';
import {HomeComponent} from '../app/components/home/home.component';
import {CoursesComponent} from '../app/components/courses/courses.component';
import {LoginComponent} from '../app/components/login/login.component';
import {PlacementComponent} from '../app/components/placement/placement.component';
import {PlacementoneComponent} from '../app/components/placementone/placementone.component'
const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },

  {
    path:'signin',
    component:SigninComponent
  },
  {
    path:'courses',
    component:CoursesComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'placement',
    component:PlacementComponent
  },
  {
    path:'placementone',
    component:PlacementoneComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
