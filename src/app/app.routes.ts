import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'tabla',
    loadComponent: () => import('./pages/tabla/tabla.page').then( m => m.TablaPage)
  },
  {
    path: 'promedio',
    loadComponent: () => import('./pages/promedio/promedio.page').then( m => m.PromedioPage)
  },
];
