import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AuthComponent } from './features/auth/auth.component';
import { filmComponent } from './features/film/film.component';
import { categoryComponent } from './features/category/category.component';
import { searchComponent } from './features/search/search.component';
import { authGuard } from './features/auth/auth.guard.service';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
  },
  {
    path: 'film/:id',
    component: filmComponent,
    canActivate: [authGuard],
  },
  {
    path: 'category/:id',
    component: categoryComponent,
    canActivate: [authGuard],
  },
  {
    path: 'search',
    component: searchComponent,
    canActivate: [authGuard],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
