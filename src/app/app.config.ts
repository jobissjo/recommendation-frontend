import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { provideClientHydration, withI18nSupport } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './auth/interceptor/auth.interceptor';


export const appConfig: ApplicationConfig = {

  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideClientHydration(withI18nSupport()),
    provideAnimationsAsync(),
    provideRouter(routes), 
    provideHttpClient(
      withFetch(),
      withInterceptors([authInterceptor])
    )
  ]
};