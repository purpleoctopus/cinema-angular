import { Component, OnDestroy, OnInit } from '@angular/core';
import { TicketService } from './service/ticket.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../../models/ticket/ticket.model';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-tickets-view',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './tickets-view.component.html',
  styleUrl: './tickets-view.component.css',
  providers:  [TicketService]
})
export class TicketsViewComponent implements OnInit{
  tickets: Ticket[];
  constructor(private ticketService: TicketService){
    this.tickets = [];
  }
  async ngOnInit() {
    try{
      const response = await lastValueFrom(this.ticketService.getTickets());
      this.tickets = response;
    }catch{
      console.error("No server response");
    }
  }
//   this.ticketService.addTicket(this.model).subscribe({next: (response) => {
//     console.log("successfull");
//   }});
}
