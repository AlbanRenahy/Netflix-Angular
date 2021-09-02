import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmComponent } from './film/film.component';
import { ListFilmComponent } from './list-film/list-film.component';
import { NavComponent } from './nav/nav.component';
import { DetailFilmComponent } from './detail-film/detail-film.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    ListFilmComponent,
    NavComponent,
    DetailFilmComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
