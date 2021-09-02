import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFilmComponent } from './list-film/list-film.component';

const routes: Routes = [
  {path:"", redirectTo:"film", pathMatch:"full"},
  {path:"film", component:ListFilmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
