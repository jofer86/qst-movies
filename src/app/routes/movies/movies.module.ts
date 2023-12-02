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

@NgModule({
  declarations: [MoviesComponent, WatchlistComponent, MovielistComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule,
    MatCardModule,
  ],
})
export class MoviesModule {}
