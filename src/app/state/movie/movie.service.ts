import { Injectable } from '@angular/core';

import { Movie, MoviesRepository } from './movies.repository';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private moviesRepository: MoviesRepository) {}
  onWatchList = this.moviesRepository.onWatchList;
  movies: Movie[] = [
    {
      assetFile: 'assets/tenet.png',
      description:
        'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.',
      duration: '2h 30min',
      genre: ['Action', 'Sci-Fi'],
      id: '53f9122c-ede6-4849-b847-7edf62c2463d',
      onWatchList: false,
      rating: 7.8,
      releasedDate: '3 September 2020',
      title: 'Tenet',
      trailerLink: 'https://www.youtube.com/watch?v=LdOM0x0XDMo',
    },
    {
      assetFile: 'assets/spider-man.png',
      description:
        'Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.',
      duration: '1h 57min',
      genre: ['Action', 'Animation', 'Adventure'],
      id: 'bfdaeaf8-d412-4dee-af2b-5fe450f26b70',
      onWatchList: false,
      rating: 8.4,
      releasedDate: '14 December 2018',
      title: 'Spider-Man: Into the Spider-Verse',
      trailerLink: 'https://www.youtube.com/watch?v=tg52up16eq0',
    },
    {
      assetFile: 'assets/knives-out.png',
      description:
        'A detective investigates the death of a patriarch of an eccentric, combative family.',
      duration: '2h 10min',
      genre: ['Comedy', 'Crime', 'Drama'],
      id: '340baf3b-1cef-4249-a36d-64427ad5fe3b',
      onWatchList: false,
      rating: 7.9,
      releasedDate: '27 November 2019',
      title: 'Knives Out',
      trailerLink: 'https://www.youtube.com/watch?v=qGqiHJTsRkQ',
    },
    {
      assetFile: 'assets/guardians-of-the-galaxy.png',
      description:
        'A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.',
      duration: '2h 1min',
      genre: ['Action', 'Adventure', 'Comedy'],
      id: 'ff70e949-ffc1-4441-91c0-72be7ecce0ec',
      onWatchList: false,
      rating: 8.0,
      releasedDate: '1 August 2014',
      title: 'Guardians of the Galaxy',
      trailerLink: 'https://www.youtube.com/watch?v=d96cjJhvlMA',
    },
    {
      assetFile: 'assets/avengers.png',
      description:
        "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
      duration: '2h 21min',
      genre: ['Action', 'Adventure', 'Sci-Fi'],
      id: 'eb3d48cc-1e54-4016-92b4-6d7903ecbe26',
      onWatchList: false,
      rating: 7.3,
      releasedDate: '1 May 2015',
      title: 'Avengers: Age of Ultron',
      trailerLink: 'https://www.youtube.com/watch?v=tmeOjFno6Do',
    },
  ];

  getAndStoreMovies(): void {
    this.moviesRepository.addMovies(this.movies);
  }

  setActiveMovie(id: string | null): void {
    this.moviesRepository.setActiveMovie(id);
  }

  addToWatchList(movie: Movie): void {
    console.log(movie);
    let newMovies = this.movies.map((mov) => {
      if (mov.id === movie.id) {
        mov.onWatchList = true;
        console.log(mov);
      }
      return mov;
    });

    this.movies = newMovies;
    this.moviesRepository.addToWatchList(movie);
    localStorage.setItem(
      'watchList',
      this.moviesRepository.onWatchList.toString()
    );
  }

  removeFromWatchList(movie: Movie): void {
    let newMovies = this.movies.map((mov) => {
      if (mov.id === movie.id) {
        mov.onWatchList = false;
        console.log(mov);
      }
      return mov;
    });

    this.movies = newMovies;
    this.moviesRepository.removeFromWatchList(movie);
    localStorage.setItem(
      'watchList',
      JSON.stringify(this.moviesRepository.onWatchList)
    );
  }
}
