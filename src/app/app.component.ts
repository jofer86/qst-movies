import { Component, OnInit } from '@angular/core';
import { MovieService } from './src/app/state/movie/movie.service';
import { MoviesRepository } from './src/app/state/movie/movies.repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private moviesService: MovieService, private moviesRepository: MoviesRepository){}
  movies$ = this.moviesRepository.movies$;
  watchList$ = this.moviesRepository.onWatchList$;

  ngOnInit(): void {
    this.movies$.subscribe(console.log);
    this.watchList$.subscribe(console.log);
    this.moviesService.getAndStoreMovies();
    let mov = this.moviesService.movies;
    this.moviesService.addToWatchList(mov[0]);
  }
}
