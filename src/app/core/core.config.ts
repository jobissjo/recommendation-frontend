import { importProvidersFrom } from '@angular/core';
import {  provideHttpClient } from '@angular/common/http';
import { AuthService } from './services/auth.service';


export const CORE_PROVIDERS = [
  provideHttpClient(),
  importProvidersFrom(AuthService),
];
