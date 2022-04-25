import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmPlayerComponent } from './components/film-player/film-player.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [

  {path: '', redirectTo:"/login", pathMatch: "full"},
  /*{path: '**', redirectTo:"/login", pathMatch: "full"},*/
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'home', component:HomeComponent},
  {path:'player-film/:id', component:FilmPlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
