import { Component, importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ticket } from '../../models/ticket.model';
import { FormsModule } from '@angular/forms';
import { TicketService } from '../tickets-view/service/ticket.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateTicket } from '../../models/ticket-create.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, FormsModule, HttpClientModule], 
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  model: CreateTicket;
  constructor(private ticketService: TicketService){
    this.model = {
      name: '',
      description: ''
    }
  }
  TwitterButton(event: Event): void {
    event.preventDefault();
    this.ticketService.getTickets();
  }
  YoutubeButton(event: Event): void {
    event.preventDefault();
    this.ticketService.addTicket(this.model);
  }
}