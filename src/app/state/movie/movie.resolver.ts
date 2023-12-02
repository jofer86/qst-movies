import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { MovieService } from './movie.service';

export const moviesResolver: ResolveFn<boolean> = () => {
  inject(MovieService).getAndStoreMovies();
  return true;
};

export const movieResolver: ResolveFn<boolean> = (
  route: ActivatedRouteSnapshot
) => {
  let movieId = route.paramMap.get('id');
  inject(MovieService).setActiveMovie(movieId);
  return true;
};
