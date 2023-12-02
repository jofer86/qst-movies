import { Component, ViewEncapsulation } from '@angular/core';
import { MoviesRepository } from 'src/app/state/movie/movies.repository';

export enum DisplayedColumns {
  Thumbnail = 'thumbnail',
  Title = 'title',
  ReleasedDate = 'releasedDate',
  Genre = 'genre',
  Duration = 'duration',
  Rating = 'rating',
  Action = 'action',
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MoviesComponent {
  movies$ = this.movieRepository.movies$;
  watchList$ = this.movieRepository.onWatchList$;
  displayedColumns: DisplayedColumns[] = [
    DisplayedColumns.Thumbnail,
    DisplayedColumns.Title,
    DisplayedColumns.ReleasedDate,
    DisplayedColumns.Genre,
    DisplayedColumns.Duration,
    DisplayedColumns.Rating,
    DisplayedColumns.Action,
  ];

  constructor(private movieRepository: MoviesRepository) {}
}
