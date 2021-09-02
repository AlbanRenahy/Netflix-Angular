import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFilmComponent } from './list-film/list-film.component';
import { DetailFilmComponent } from './detail-film/detail-film.component';

const routes: Routes = [
  {path:"", redirectTo:"film", pathMatch:"full"},
  {path:"film", component:ListFilmComponent},
  {path:"detailFilm/:id", component:DetailFilmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
