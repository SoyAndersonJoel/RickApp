import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { DetailsPage } from './details/details.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'details/:id',
    component: DetailsPage,
  },
  {
    path: 'details',
    loadComponent: () => import('./details/details.page').then( m => m.DetailsPage)
  },
];
