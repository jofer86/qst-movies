import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { WatchListComponent } from './watch-list/watch-list.component';
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
          movies: movieResolver
        }
      },
      {
        path: 'watch-list',
        component: WatchListComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
