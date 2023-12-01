import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Movie } from './movies.repository';
import { inject } from '@angular/core';
import { MovieService } from './movie.service';

export const movieResolver: ResolveFn<boolean> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  inject(MovieService).getAndStoreMovies();
  return true;
};
