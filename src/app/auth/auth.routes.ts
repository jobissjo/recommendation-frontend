import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { GuestLoginComponent } from './components/guest-login/guest-login.component';
import { GuestRegisterComponent } from './components/guest-register/guest-register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

export const authRoutes: Routes = [
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'register', component: RegisterComponent
    },
    {
        path: 'guest-login', component: GuestLoginComponent
    },
    {
        path: 'guest-register', component: GuestRegisterComponent
    },
    {
        path: 'forgot-password', component: ForgotPasswordComponent,   
    },
    {
        path: 'reset-password', component: ResetPasswordComponent,  
    }

]