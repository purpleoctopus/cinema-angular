import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Film } from '../../models/film/film.model';
import { FilmService } from './service/film.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule} from '@angular/common';
@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.css',
  providers: [FilmService]
})
export class StartPageComponent {
  films: Film[];
  constructor(private filmService: FilmService){
    this.films = [];
  }
  async ngOnInit() {
    try{
      const response = await lastValueFrom(this.filmService.getFilms());
      this.films = response;
    }catch{
      console.error("No server response");
    }
  }
}
