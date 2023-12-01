import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { MoviesRoutingModule } from './movies-routing.module';



@NgModule({
  declarations: [MoviesComponent, WatchListComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
