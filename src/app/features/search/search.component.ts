import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { movieService } from '../../shared/services/movies.services';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  imports: [FormsModule, NgFor, NgIf,RouterLink],
})
export class searchComponent {
  constructor(private movieServ: movieService) {}
  result;
  onSubmit(form: NgForm) {
    this.movieServ.getSearchedMovies(form.value.search).subscribe((res) => {
      this.result = res.results;
      console.log(this.result);
    });
  }
}
