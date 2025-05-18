import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', 
        loadChildren: ()=> import('./home/home.routes').then((r)=> r.homeRoutes),
    },
    {
        path: 'auth',
        loadChildren: ()=> import('./auth/auth.routes').then((r)=> r.authRoutes),
    },
    {
        path: 'contact',
        loadChildren: ()=> import('./contact/contact.routes').then((r)=> r.contactRoutes),
    },
    {
        path: 'profile',
        loadChildren: ()=> import('./feature/profile/profile.routes').then((r)=> r.profileRoutes),
    }
    
];
