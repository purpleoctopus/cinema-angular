import { Component, OnInit } from '@angular/core';
import { TicketService } from './service/ticket/ticket.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../../models/ticket/ticket.model';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { Session } from '../../models/session/session.model';
import { SessionService } from './service/session/session.service';

@Component({
  selector: 'app-tickets-view',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './tickets-view.component.html',
  styleUrl: './tickets-view.component.css',
  providers:  [TicketService, SessionService]
})
export class TicketsViewComponent implements OnInit{
  places_in_row: number[] = [6,6,6,5,5,4];
  tickets: Ticket[];
  sessions: Session[] = [];
  places_selected: Set<number> = new Set();
  places: number[][];
  //init ctor
  constructor(private ticketService: TicketService, private sessionService: SessionService){
    this.tickets = [];
    this.places = this.generateMatrixFromRows(this.places_in_row);
    this.sessions.push({id: 'popa', filmId: '', date: '', price: 500});
  }
  //OnInit method
  async ngOnInit() {
    try{
      //const responseTickets = await lastValueFrom(this.ticketService.getTickets());
      //this.tickets = responseTickets;
      //const responseSessions = await lastValueFrom(this.sessionService.getSessions());
      //this.sessions = responseSessions;
    }catch{
      console.error("No server response");
    }
  }
  //generate matrix from array of places count in each row
  generateMatrixFromRows(rows: number[]): number[][] {
    let matrix: number[][] = [];
    let num = 1;
    for(let i = 0;i < rows.length; i++){
      matrix.push([]);
      for(let j = 0; j<rows[i]; j++){
        matrix[i].push(num);
        num++;
      }
    }
    return matrix;
  }
  //method for a ticket button click action
  buyTicketAction(number: number): void{
    if(this.isButtonClicked(number)){
      this.places_selected.delete(number);
    }else{
      this.places_selected.add(number);
    }
  }
  isButtonClicked(number: number): boolean {
    return this.places_selected.has(number);
  }
//   this.ticketService.addTicket(this.model).subscribe({next: (response) => {
//     console.log("successfull");
//   }});
}
