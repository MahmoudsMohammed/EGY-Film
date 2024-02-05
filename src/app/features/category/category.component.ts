import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieService } from '../../shared/services/movies.services';
import { responseInterface } from '../../shared/models/response';
import { NgFor } from '@angular/common';
import { averagePipe } from '../../shared/pipes/average.pipe';
import { decriptionPipe } from '../../shared/pipes/decription.pipe';

@Component({
  selector: 'category',
  standalone: true,
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
  imports: [NgFor, averagePipe , decriptionPipe],
})
export class categoryComponent implements OnInit {
  constructor(
    private active: ActivatedRoute,
    private movieServie: movieService
  ) {}
  id = 0;
  movies: responseInterface[];
  ngOnInit(): void {
    this.active.params.subscribe((p) => {
      this.id = +p['id'];
      this.movieServie.getByCategory(this.id).subscribe((res) => {
        this.movies = res.results;
        console.log(this.movies);
      });
    });
  }
}
