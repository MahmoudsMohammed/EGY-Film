import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isauth = false;
  userData;
  ngOnInit(): void {
    if (
      !sessionStorage.getItem('userData') ||
      sessionStorage.getItem('userData').length === 0
    ) {
      this.isauth = false;
    } else {
      this.isauth = true;
      this.userData = JSON.parse(sessionStorage.getItem('userData'));
    }
  }
}
