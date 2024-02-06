import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Root } from '../models/response';

const options = {
  params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc',
  },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2RlZTE0MDIyM2I4YzBhMTk3ZjgzYTczYjMyOGMxYiIsInN1YiI6IjY1YmUyZWRjMTJjNjA0MDE3YzAwNTZjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TMiTfiQGDG2xshKTO2amE0mZDY2Zwd2qslFDBb0uTmI',
  },
};

@Injectable({ providedIn: 'root' })
export class movieService {
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/discover/movie',
      options
    );
  }

  getTopRated() {
    return this.http.get<Root>(
      'https://api.themoviedb.org/3/movie/top_rated',
      options
    );
  }

  getPopularMovies() {
    return this.http.get<Root>(
      'https://api.themoviedb.org/3/movie/popular',
      options
    );
  }

  getTvShows() {
    return this.http.get<Root>(
      'https://api.themoviedb.org/3/discover/tv',
      options
    );
  }

  getUpcomingMovies() {
    return this.http.get<Root>(
      'https://api.themoviedb.org/3/movie/upcoming',
      options
    );
  }

  getByCategory(id: number) {
    return this.http.get<Root>(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${id}`,
      options
    );
  }

  getMovieDetails(id: number) {
    return this.http.get<Root>(
      `https://api.themoviedb.org/3/movie/${id}`,
      options
    );
  }

  getMovieVideo(id: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      options
    );
  }

  getMovieCredit(id: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}/credits`,
      options
    );
  }

  // ##########################
  getRatedMovies() {
    return this.http.get<Root>(
      'https://api.themoviedb.org/3/guest_session/guest_session_id/rated/movies',
      options
    );
  }

  getBannerImage(id: number) {
    return this.http.get<Root>(
      `https://api.themoviedb.org/3/movie/${id}/images`,
      options
    );
  }

  getBannerVideo(id: number) {
    return this.http.get<Root>(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      options
    );
  }

  getBannerDetail(id: number) {
    return this.http.get<Root>(
      `https://api.themoviedb.org/3/movie/${id}`,
      options
    );
  }
}
