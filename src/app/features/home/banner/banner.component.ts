import { NgFor } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import Swiper from 'swiper';
import { responseInterface } from '../../../shared/models/response';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'banner',
  imports: [NgFor, RouterLink],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class bannerComponent implements AfterViewInit {
  @ViewChild('banner') banner: ElementRef;
  @Input() films: responseInterface[];
  ngAfterViewInit(): void {
    setInterval(() => {
      new Swiper(this.banner.nativeElement, {
        loop: true,
        speed: 1000,
        centeredSlides: true,
      }).slideNext();
    }, 4000);
  }
}
