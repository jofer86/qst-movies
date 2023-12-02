import { Component, Input, ViewEncapsulation } from '@angular/core';

import { DisplayedColumns } from '../movies.component';
import { Movie, MoviesRepository } from 'src/app/state/movie/movies.repository';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-movielist',
  styleUrls: ['./movielist.component.scss'],
  templateUrl: './movielist.component.html',
})
export class MovielistComponent {
  @Input() displayedColumns!: string[];
  @Input() movies!: Movie[];
  DisplayedColumns = DisplayedColumns;
  toggleSortByDate = false;
  toggleSortByTitle = false;

  constructor(private movieRepository: MoviesRepository) {}

  addToWatchList(movie: Movie): void {
    movie.onWatchList = true;
    this.movieRepository.addToWatchList(movie);
  }

  sortMoviesBy(sortBy: string): void {
    if (sortBy === 'releasedDate') {
      this.toggleSortByDate = !this.toggleSortByDate;
      this.movieRepository.sortMoviesBy(sortBy, this.toggleSortByDate);
    }
    if (sortBy === 'title') {
      this.toggleSortByTitle = !this.toggleSortByTitle;
      this.movieRepository.sortMoviesBy(sortBy, false, this.toggleSortByTitle);
    }
  }
}
