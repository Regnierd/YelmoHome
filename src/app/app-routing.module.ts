import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditFilmComponent } from './components/edit-film/edit-film.component';
import { FilmPlayerComponent } from './components/film-player/film-player.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [

  {path: '', redirectTo:"/login", pathMatch: "full"},
  /*{path: '**', redirectTo:"/login", pathMatch: "full"},*/
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'home', component:HomeComponent},
  {path:'profile', component:ProfileComponent},
  {path:'player-film/:id', component:FilmPlayerComponent},
  {path:'edit-film/:id', component:EditFilmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
