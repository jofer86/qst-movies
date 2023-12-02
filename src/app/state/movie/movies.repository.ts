import { Injectable } from '@angular/core';
import { select, withProps, createStore } from '@ngneat/elf';
import {
  selectActiveEntity,
  selectAllEntities,
  setActiveId,
  setEntities,
  withActiveId,
  withEntities,
} from '@ngneat/elf-entities';
import { take, tap } from 'rxjs';

export interface Movie {
  assetFile: string;
  description: string;
  duration: string;
  genre: string[];
  id: string;
  onWatchList: boolean;
  rating: number;
  releasedDate: string;
  title: string;
  trailerLink: string;
}

export interface MoviesProps {
  onWatchList: Movie[];
}

const movieStore = createStore(
  { name: 'movies' },
  withProps<MoviesProps>({ onWatchList: [] }),
  withEntities<Movie>(),
  withActiveId()
);

@Injectable({ providedIn: 'root' })
export class MoviesRepository {
  movie = movieStore.getValue().activeId;
  movie$ = movieStore.pipe(selectActiveEntity());
  movies$ = movieStore.pipe(selectAllEntities());
  onWatchList = movieStore.getValue().onWatchList;
  onWatchList$ = movieStore.pipe(select((state) => state.onWatchList));

  setActiveMovie(movieId: string | null) {
    movieStore.update(setActiveId(movieId));
  }

  sortMoviesBy(
    sortBy: string,
    toggleSortByDate = false,
    toggleSortByTitle = false
  ) {
    this.movies$
      .pipe(
        take(1),
        tap({
          next: (movies) => {
            movies.sort((a: any, b: any) => {
              if (sortBy === 'releasedDate') {
                if (toggleSortByDate) {
                  return (
                    new Date(b[sortBy]).getTime() -
                    new Date(a[sortBy]).getTime()
                  );
                }
                return (
                  new Date(a[sortBy]).getTime() - new Date(b[sortBy]).getTime()
                );
              }
              if (toggleSortByTitle) {
                return b[sortBy].localeCompare(a[sortBy]);
              } else {
                return a[sortBy].localeCompare(b[sortBy]);
              }
            });
            movieStore.update(setEntities(movies));
          },
        })
      )
      .subscribe();
  }

  addMovies(movies: Movie[]) {
    movieStore.update(setEntities(movies));
  }

  addToWatchList(movie: Movie) {
    movieStore.update((state) => ({
      ...state,
      onWatchList: [...state.onWatchList, movie],
    }));
  }

  removeFromWatchList(movie: Movie) {
    movieStore.update((state) => ({
      ...state,
      onWatchList: state.onWatchList.filter((m) => m.id !== movie.id),
    }));
  }
}
