import { Component, OnInit } from '@angular/core';
import { carouselComponent } from './carousel/carousel.component';
import { movieService } from '../../shared/services/movies.services';
import { responseInterface } from '../../shared/models/response';
import { forkJoin, map } from 'rxjs';
import { bannerComponent } from './banner/banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [carouselComponent, bannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private movieSeriv: movieService) {}

  movies: responseInterface[];
  topRated: responseInterface[];
  popular: responseInterface[];
  tv: responseInterface[];
  upcoming: responseInterface[];

  source = [
    this.movieSeriv.getMovies(),
    this.movieSeriv.getTopRated(),
    this.movieSeriv.getPopularMovies(),
    this.movieSeriv.getTvShows(),
    this.movieSeriv.getUpcomingMovies(),
  ];
  ngOnInit(): void {
    forkJoin(this.source)
      .pipe(
        map(([movies, topRated, popular, tv, upcoming]) => {
          return { movies, topRated, popular, tv, upcoming };
        })
      )
      .subscribe((res) => {
        this.movies = res.movies.results;
        this.topRated = res.topRated.results;
        this.popular = res.popular.results;
        this.tv = res.tv.results;
        this.upcoming = res.upcoming.results;
      });
  }
}
