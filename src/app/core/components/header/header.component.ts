import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { authService } from '../../../features/auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  constructor(private authService: authService) {}
  userData = {};
  auth = false;
  ngOnInit(): void {
    this.authService.user.subscribe((res) => {
      if (res !== this.userData) {
        this.userData = res;
        this.auth = true;
      }
    });
  }

  onSignOut() {
    this.auth = false;
    this.userData = {};
    sessionStorage.removeItem('userData');
  }
}
