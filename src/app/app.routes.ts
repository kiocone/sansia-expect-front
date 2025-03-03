import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then(
        (c) => c.HomeComponent
      )
  },
  // define path for post detail by id
  {
    path: 'post/:id',
    loadComponent: () =>
      import('./shared/components/post-detail/post-detail.component').then(
        (c) => c.PostDetailComponent
      )
  }
];
