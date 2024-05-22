import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./core/navbar/navbar.component";
import { StartPageComponent } from "./core/start-page/start-page.component";
import { FooterComponent } from "./core/footer/footer.component";
import { TicketService } from './core/tickets-view/service/ticket.service';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, StartPageComponent, FooterComponent],
    providers:  [TicketService]
})
export class AppComponent {
  title ='cinema';
}
