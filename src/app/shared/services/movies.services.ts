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
  getTopRated() {
    return this.http.get<Root>(
      'https://api.themoviedb.org/3/discover/movie',
      options
    );
  }
}
