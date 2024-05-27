import { Injectable } from '@angular/core';
import { Ticket } from '../../../../models/ticket/ticket.model';
import { HttpClient} from '@angular/common/http';
import { CreateTicket } from '../../../../models/ticket/ticket-create.model';
import { environment } from '../../../../../environments/environment.development';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  addTicket(model: CreateTicket): Observable<void>{
    return this.http.post<void>(`${environment.apiBaseUrl}/api/tickets`, model);
  }

  getTickets(): Observable<Ticket[]>{
    return this.http.get<Ticket[]>(`${environment.apiBaseUrl}/api/tickets`);
  }
}