import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieService } from '../../shared/services/movies.services';
import { NgFor, NgIf } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { trailerComponent } from './trailer/trailer.component';

@Component({
  selector: 'film',
  standalone: true,
  templateUrl: './film.component.html',
  styleUrl: './film.component.scss',
  imports: [NgIf, NgFor, trailerComponent],
})
export class filmComponent implements OnInit {
  constructor(
    private active: ActivatedRoute,
    private movieServ: movieService,
    private sanitizer: DomSanitizer
  ) {}
  id: number = 0;
  details;
  video = null;
  cast;
  watchTrailer = false;
  ngOnInit(): void {
    this.active.params.subscribe((p) => {
      this.id = +p['id'];
      this.getDetails(this.id);
      this.getVideo(this.id);
      this.getCast(this.id);
    });
  }

  getDetails(id: number) {
    this.movieServ.getMovieDetails(id).subscribe((res) => {
      this.details = res;
    });
  }

  getCast(id: number) {
    this.movieServ.getMovieCredit(id).subscribe((res) => {
      this.cast = res['cast'];
      console.log(this.cast);
    });
  }

  getVideo(id: number) {
    this.movieServ.getMovieVideo(id).subscribe((res) => {
      res['results'].forEach((e) => {
        if (e.type === 'Trailer' && this.video === null) {
          this.video = this.sanitizer.bypassSecurityTrustResourceUrl(
            `https://www.youtube.com/embed/${e.key}?autoplay=1&mute=0&loop=1&controls=0`
          );
        }
      });
    });
  }
}
