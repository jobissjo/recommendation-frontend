import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { CORE_PROVIDERS } from './core/core.config';
import Aura from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {

  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(),
    provideAnimationsAsync(),
    providePrimeNG({ 
      theme: {
          preset: Aura
      }
    }),
    ...CORE_PROVIDERS
  
  ]
};
