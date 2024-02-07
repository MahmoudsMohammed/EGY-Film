import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { movieService } from '../../shared/services/movies.services';
import { responseInterface } from '../../shared/models/response';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { averagePipe } from '../../shared/pipes/average.pipe';
import { decriptionPipe } from '../../shared/pipes/decription.pipe';
import { loaderComponent } from '../../shared/components/loader/loader.component';

@Component({
  selector: 'category',
  standalone: true,
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
  imports: [
    NgFor,
    NgClass,
    NgIf,
    averagePipe,
    decriptionPipe,
    RouterModule,
    loaderComponent,
  ],
})
export class categoryComponent implements OnInit {
  constructor(
    private active: ActivatedRoute,
    private movieServie: movieService
  ) {}
  id = 0;
  movies: responseInterface[];
  isLoading = false;

  ngOnInit(): void {
    this.isLoading = true;
    this.active.params.subscribe((p) => {
      this.id = +p['id'];
      this.movieServie.getByCategory(this.id).subscribe((res) => {
        this.movies = res.results;
        this.isLoading = false;
      });
    });
  }
}
