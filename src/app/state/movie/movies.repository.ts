import { Injectable } from '@angular/core';
import { select, withProps, createStore } from '@ngneat/elf';
import { selectAllEntities, setEntities, withEntities } from '@ngneat/elf-entities';

export interface Movie {
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
  withEntities<Movie>()
);

@Injectable({ providedIn: 'root' })
export class MoviesRepository {
  movies$ = movieStore.pipe(selectAllEntities());
  onWatchList$ = movieStore.pipe(select((state) => state.onWatchList));
  onWatchList = movieStore.getValue().onWatchList;


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
