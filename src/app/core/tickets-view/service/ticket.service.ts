import { Injectable } from '@angular/core';
import { Ticket } from '../../../models/ticket.model';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  addTicket(model: Ticket){
    return this.http.post("https://localhost:44382/api/films", model).subscribe({next: (response) => {
      console.log("successfull");
    }});;
  }

  getTickets(){
    return this.http.get("https://localhost:44382/api/films").subscribe(response => {
      console.log(response);
    });
  }
}