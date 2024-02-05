import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AuthComponent } from './features/auth/auth.component';
import { filmComponent } from './features/film/film.component';
import { categoryComponent } from './features/category/category.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'film',
    component: filmComponent,
  },
  {
    path: 'category/:id',
    component: categoryComponent,
  },
];
