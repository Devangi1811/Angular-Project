import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CoursesComponent } from './components/courses/courses.component';
import { TrendingComponent } from './components/trending/trending.component';
import { SigninComponent } from './components/signin/signin.component';
import { LoginComponent } from './components/login/login.component';
import { PlacementComponent } from './components/placement/placement.component';
import { PlacementoneComponent } from './components/placementone/placementone.component';

 const appRoutes: Routes = [
  { path: '', pathMatch:'full',redirectTo:'home' },
  { path: 'About',      component: AboutComponent },
  { path: 'Courses',      component: CoursesComponent },
  { path: 'Trending',      component: TrendingComponent },
  { path: 'signin',      component: SigninComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    TrendingComponent,
    SigninComponent,
    LoginComponent,
    PlacementComponent,
    PlacementoneComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes)


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

