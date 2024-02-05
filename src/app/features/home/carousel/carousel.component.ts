import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import Swiper from 'swiper';
import { responseInterface } from '../../../shared/models/response';
import { decriptionPipe } from '../../../shared/pipes/decription.pipe';
import { averagePipe } from '../../../shared/pipes/average.pipe';

@Component({
  selector: 'carousel',
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  imports: [CommonModule, decriptionPipe, averagePipe],
})
export class carouselComponent implements AfterViewInit {
  @ViewChild('swiper') swiper: ElementRef;
  @Input({ required: true }) title: string;
  @Input({ required: true }) films: responseInterface[];

  ngAfterViewInit(): void {
    // intialize a swiper
    new Swiper(this.swiper.nativeElement, {
      speed: 0,
      slidesPerView: 3,
      slidesPerGroup: 2,
      centeredSlides: true,
      loop: true,
      breakpoints: {
        600: {
          speed: 0,
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 5,
          centeredSlides: true,
        },
        900: {
          speed: 0,
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 5,
          centeredSlides: true,
        },
        1200: {
          speed: 0,
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1500: {
          speed: 0,
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1800: {
          speed: 0,
          slidesPerView: 5,
          slidesPerGroup: 6,
          spaceBetween: 5,
          centeredSlides: false,
        },
      },
    });
  }
}
