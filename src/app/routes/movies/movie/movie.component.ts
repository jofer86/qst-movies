import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MovieService } from 'src/app/state/movie/movie.service';
import { Movie, MoviesRepository } from 'src/app/state/movie/movies.repository';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  encapsulation: ViewEncapsulation.None,
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
