import { Component, OnInit } from '@angular/core';
import { Film } from '../../models/film/film.model';
import { FilmService } from './service/film.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule} from '@angular/common';
import { Subscription, lastValueFrom } from 'rxjs';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.css',
  providers: [FilmService]
})
export class StartPageComponent implements OnInit {
  films: Film[];
  filmSubscription?: Subscription;
  constructor(private filmService: FilmService){
    this.films = [];
  }
  async ngOnInit() {
    try{
        this.films = await lastValueFrom(this.filmService.getFilms());
    }catch{
      console.error("No server response");
    }
  }
}
