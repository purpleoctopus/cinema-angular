import { Component, importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TicketsViewComponent } from '../tickets-view/tickets-view.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, FormsModule, TicketsViewComponent], 
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  

  // TwitterButton(event: Event): void {
  //   event.preventDefault();
  // }
  // YoutubeButton(event: Event): void {
  //   event.preventDefault();
  // }
}