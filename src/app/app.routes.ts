import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./component/navbar/navbar/movie/movies/movies.component').then(
        (m) => m.MoviesComponent
      ),
  },
  {
    path: 'movie/:id',
    loadComponent: () =>
      import('./component/movie-details/movie-details.component').then(
        (m) => m.MovieDetailsComponent
      ),
  },
];
