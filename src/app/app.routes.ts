import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/auth/auth.component').then((a) => a.AuthComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.component').then((a) => a.HomeComponent),
  },
];
