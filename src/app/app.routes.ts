import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', 
        loadChildren: ()=> import('./home/home.routes').then((r)=> r.homeRoutes),
    },
    {
        path: 'auth',
        loadChildren: ()=> import('./auth/auth.routes').then((r)=> r.authRoutes),
    }
    
];
