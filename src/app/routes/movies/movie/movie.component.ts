import { Component, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';

import { Movie, MoviesRepository } from 'src/app/state/movie/movies.repository';
import { MovieService } from 'src/app/state/movie/movie.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-movie',
  styleUrls: ['./movie.component.scss'],
  templateUrl: './movie.component.html',
})
export class MovieComponent {
  movie$ = this.moviesRepository.movie$;
  constructor(
    private moviesRepository: MoviesRepository,
    private moviesService: MovieService,
    private location: Location
  ) {}

  goBack(): void {
    this.location.back();
  }

  handleToggle(movie: Movie): void {
    if (movie.onWatchList) {
      this.moviesService.removeFromWatchList(movie);
    } else {
      this.moviesService.addToWatchList(movie);
    }
  }
}
