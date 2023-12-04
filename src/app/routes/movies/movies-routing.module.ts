import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies.component';
import { movieResolver, moviesResolver } from 'src/app/state/movie/movie.resolver';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MoviesComponent,
        resolve: {
          movies: moviesResolver,
        },
      },
      {
        path: 'movies/:id',
        component: MovieComponent,
        resolve: {
          movie: movieResolver,
          movies: moviesResolver,
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
