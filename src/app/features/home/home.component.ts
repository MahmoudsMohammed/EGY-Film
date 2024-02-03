import { Component, OnInit } from '@angular/core';
import { carouselComponent } from './carousel/carousel.component';
import { movieService } from '../../shared/services/movies.services';
import { responseInterface } from '../../shared/models/response';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [carouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private movieSeriv: movieService) {}
  list: responseInterface[] = [];
  ngOnInit(): void {
    this.movieSeriv.getTopRated().subscribe(
      (res) => {
        this.list = res.results;
      },
      (error) => {
        console.log('there is error' + error);
      }
    );
  }
}
