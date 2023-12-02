import { Component, Input, ViewEncapsulation } from '@angular/core';

import { DisplayedColumns } from '../movies.component';
import { Movie, MoviesRepository } from 'src/app/state/movie/movies.repository';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MovielistComponent {
  @Input() movies!: Movie[];
  @Input() displayedColumns!: string[];

  toggleSortByDate = false;
  toggleSortByTitle = false;
  DisplayedColumns = DisplayedColumns;

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
