import { importProvidersFrom } from '@angular/core';
import {  provideHttpClient, withFetch } from '@angular/common/http';
import { AuthService } from './services/auth.service';


export const CORE_PROVIDERS = [
  provideHttpClient(withFetch()),
];
