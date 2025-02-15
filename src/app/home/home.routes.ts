import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/home/home.component').then((m) => m.HomeComponent)
    }
]