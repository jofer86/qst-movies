import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
import { MovieService } from './movie.service';

export const moviesResolver: ResolveFn<boolean> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  inject(MovieService).getAndStoreMovies();
  return true;
};

export const movieResolver: ResolveFn<boolean> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  let movieId = route.paramMap.get('id');
  inject(MovieService).setActiveMovie(movieId);
  return true;
};
