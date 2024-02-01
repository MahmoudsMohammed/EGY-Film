import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./auth/auth.component').then((a) => a.AuthComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((a) => a.HomeComponent),
  },
];
