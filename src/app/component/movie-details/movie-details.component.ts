import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {
  MatPaginator,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import { Movie } from '../../model/movie.interface';
import { MovieService } from '../../services/movie.service';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatPaginatorModule,
    MatIconModule,
  ],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent implements OnInit {
  movie!: Movie;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private movieServie: MovieService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.loadMovieDetails(id);
    });
  }

  loadMovieDetails(id: number): void {
    this.loading = true;
    this.movieServie.getMovieDetails(id).subscribe({
      next: (movie) => {
        this.movie = movie;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading movie details', error);
        this.loading = false;
      },
    });
  }

  goBack(): void {
    window.history.back();
  }
}
