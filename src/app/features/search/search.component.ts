import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { movieService } from '../../shared/services/movies.services';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { loaderComponent } from '../../shared/components/loader/loader.component';

@Component({
  standalone: true,
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  imports: [FormsModule, NgFor, NgIf, RouterLink, loaderComponent],
})
export class searchComponent {
  constructor(private movieServ: movieService) {}
  result;
  isLoading = false;

  onSubmit(form: NgForm) {
    this.isLoading = true;
    this.movieServ.getSearchedMovies(form.value.search).subscribe((res) => {
      this.result = res.results;
      this.isLoading = false;
    });
  }
}
