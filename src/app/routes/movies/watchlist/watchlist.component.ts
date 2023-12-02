import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Movie, MoviesRepository } from 'src/app/state/movie/movies.repository';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WatchlistComponent {
  @Input()
  watchList!: Movie[];
  constructor(private movieRepository: MoviesRepository) {}

  removeFromWatchList(movie: Movie): void {
    movie.onWatchList = false;
    this.movieRepository.removeFromWatchList(movie);
  }
}
