import { Routes } from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar.component';
import { StartPageComponent } from './core/start-page/start-page.component';
import { TicketsViewComponent } from './core/tickets-view/tickets-view.component';

export const routes: Routes = [
    {
        path: 'startpage',
        component: StartPageComponent
    },
    {
        path: 'buytickets',
        component: TicketsViewComponent
    }
];
