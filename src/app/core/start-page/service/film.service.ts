import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { CreateFilm } from '../../../models/film/film-create.model';
import { Film } from '../../../models/film/film.model';


@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  addFilm(model: CreateFilm){
    return this.http.post<void>(`${environment.apiBaseUrl}/api/films`, model);
  }

  getFilms(): Observable<Film[]>{
    return this.http.get<Film[]>(`${environment.apiBaseUrl}/api/films`);
  }
}