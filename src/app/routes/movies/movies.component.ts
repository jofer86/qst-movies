import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Movie, MoviesRepository } from 'src/app/state/movie/movies.repository';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MoviesComponent {
  movies$ = this.movieRepository.movies$;
  watchList$ = this.movieRepository.onWatchList$;
  displayedColumns: string[] = ['thumbnail', 'title', 'genre', 'duration', 'rating', 'action']

  constructor(private movieRepository: MoviesRepository) {}


  addToWatchList(movie: Movie): void {
    movie.onWatchList = true;
    this.movieRepository.addToWatchList(movie);
  }

  removeFromWatchList(movie: Movie): void {
    movie.onWatchList = false;
    this.movieRepository.removeFromWatchList(movie);
  }

}
