import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieService } from '../../shared/services/movies.services';

@Component({
  selector: 'film',
  standalone: true,
  templateUrl: './film.component.html',
  styleUrl: './film.component.scss',
})
export class filmComponent implements OnInit {
  constructor(
    private active: ActivatedRoute,
    private movieServ: movieService
  ) {}
  id: number = 0;
  details;
  video;
  cast;
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

  getVideo(id: number) {
    this.movieServ.getMovieVideo(id).subscribe((res) => {
      res['results'].forEach((e) => {
        if (e.type === 'Trailer') {
          this.video = e.key;
        }
      });
    });
  }

  getCast(id: number) {
    this.movieServ.getMovieCredit(id).subscribe((res) => {
      this.cast = res['cast'];
      console.log(this.cast);
    });
  }
}
