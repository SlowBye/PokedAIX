import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'pokemon-modal',
    loadComponent: () => import('./pokemon-modal/pokemon-modal.page').then( m => m.PokemonModalPage)
  },
];
