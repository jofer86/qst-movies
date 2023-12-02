import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';

import { MovieComponent } from './movie/movie.component';
import { MovielistComponent } from './movielist/movielist.component';
import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { SafeUrlPipe } from 'src/app/pipes/safe-url.pipe';
import { WatchlistComponent } from './watchlist/watchlist.component';

@NgModule({
  declarations: [
    MovieComponent,
    MovielistComponent,
    MoviesComponent,
    SafeUrlPipe,
    WatchlistComponent,
  ],
  imports: [
    CommonModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatTableModule,
    MoviesRoutingModule,
  ],
})
export class MoviesModule {}
