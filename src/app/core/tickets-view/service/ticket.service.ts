import { Injectable } from '@angular/core';
import { Ticket } from '../../../models/ticket.model';
import { HttpClient} from '@angular/common/http';
import { CreateTicket } from '../../../models/ticket-create.model';
import { environment } from '../../../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  addTicket(model: CreateTicket){
    return this.http.post<void>(`${environment.apiBaseUrl}/api/films`, model).subscribe({next: (response) => {
      console.log("successfull");
    }});
  }

  getTickets(){
    return this.http.get<Ticket>(`${environment.apiBaseUrl}/api/films`).subscribe(response => {
      console.log(response);
    });
  }
}