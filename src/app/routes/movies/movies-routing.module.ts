import { NgModule } from '@angular/core';
import { MoviesComponent } from './movies.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { RouterModule, Routes } from '@angular/router';
import { movieResolver } from 'src/app/state/movie/movie.resolver';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MoviesComponent,
        resolve: {
          movies: movieResolver,
        },
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
