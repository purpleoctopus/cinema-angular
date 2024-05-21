import { Routes } from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar.component';
import { StartPageComponent } from './core/start-page/start-page.component';

export const routes: Routes = [
    {
        path: 'startpage',
        component: StartPageComponent
    }
];
