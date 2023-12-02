import { Component, Input } from '@angular/core';
import { Movie, MoviesRepository } from 'src/app/state/movie/movies.repository';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss'],
})
export class MovielistComponent {
  @Input() movies!: Movie[];
  @Input() displayedColumns!: string[];

  constructor(private movieRepository: MoviesRepository) {}

  addToWatchList(movie: Movie): void {
    movie.onWatchList = true;
    this.movieRepository.addToWatchList(movie);
  }
}
