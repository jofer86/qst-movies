import { Component, Input } from '@angular/core';
import { Movie, MoviesRepository } from 'src/app/state/movie/movies.repository';
import { DisplayedColumns } from '../movies.component';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss'],
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
    // this.movieRepository.sortMoviesBy(sortBy);
  }
}
