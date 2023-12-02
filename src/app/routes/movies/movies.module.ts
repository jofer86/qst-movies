import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { MovielistComponent } from './movielist/movielist.component';
import { MatButtonModule } from '@angular/material/button';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [MoviesComponent, WatchlistComponent, MovielistComponent, MovieComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class MoviesModule {}
