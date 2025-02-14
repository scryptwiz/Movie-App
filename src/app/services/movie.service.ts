import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiKey = environment.apiKey;
  private apiUrl = environment.apiUrl;

  constructor (private http: HttpClient) { }

  getMovies (page: number = 1): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/movie/popular`, {
      params: {
        api_key: this.apiKey,
        page: page.toString(),
        language: 'fr-FR',
      },
    });
  }

  getMovieDetails (id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`);
  }

  searchMovies (query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/search/movie`, {
      params: {
        api_key: this.apiKey,
        query: query,
        language: 'fr-FR',
      },
    });
  }
}
