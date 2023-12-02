import { TestBed } from '@angular/core/testing';

import { Movie, MoviesRepository } from './movies.repository';
import { MovieService } from './movie.service';

describe('MovieService', () => {
  let service: MovieService;
  let repository: MoviesRepository;
  let addToWatchListSpy: jasmine.Spy;
  let removeFromWatchListSpy: jasmine.Spy;
  const movie: Movie = {
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
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieService);
    repository = TestBed.inject(MoviesRepository);
    addToWatchListSpy = spyOn(repository, 'addToWatchList');
    removeFromWatchListSpy = spyOn(repository, 'removeFromWatchList');

    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a movie', () => {
    service.addToWatchList(movie);

    expect(addToWatchListSpy).toHaveBeenCalledOnceWith(movie);
  });

  it('remove movies from watch list', () => {
    service.removeFromWatchList(movie);

    expect(removeFromWatchListSpy).toHaveBeenCalledOnceWith(movie);
  });
});
