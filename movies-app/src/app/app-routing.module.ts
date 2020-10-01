import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorListComponent } from './components/actor-list/actor-list.component';
import { CreateActorComponent } from './components/create-actor/create-actor.component';
import { CreateMovieComponent } from './components/create-movie/create-movie.component';
import { ErrorComponent } from './components/error/error.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { SearchComponent } from './components/search/search.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent},
  { path: 'search', component: SearchComponent},
  { path: 'movies/create', component: CreateMovieComponent}, 
  { path: 'actor/create', component: CreateActorComponent}, 
  { path: 'actor/list', component: ActorListComponent}, 
  { path: 'movies/list', component: MoviesListComponent}, 
  { path: '**', component: ErrorComponent },
  { path: 'error', component: ErrorComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
