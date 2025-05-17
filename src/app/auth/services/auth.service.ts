import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { TokenResponse } from '../../shared/models/auth.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http:HttpClient,
    private router: Router
  ) { }
  private currentUserSubject = new BehaviorSubject<any>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  private refreshTokenInProgress = false;
  private refreshTokenSubject = new BehaviorSubject<any>(null);

  login(email: string, password: string) {
    return this.http.post<TokenResponse>(`${environment.apiBaseUrl}/auth/login`, { email, password })
      .pipe(
        tap((res)=> {
          this.setTokens(res)
        })
      )
  }

  refreshToken(): Observable<TokenResponse> {
    if (this.refreshTokenInProgress) {
      return new Observable(observer => {
        this.refreshTokenSubject.subscribe(token => {
          observer.next(token);
          observer.complete();
        });
      });
    }
    this.refreshTokenInProgress = true;
    this.refreshTokenSubject.next(null);

    const refreshToken = this.getRefreshToken();
    if (!refreshToken) {
      return throwError(() => new Error('No refresh token available'));
    }
    return this.http.post<TokenResponse>(`${environment.apiBaseUrl}/auth/refresh-token`, { refreshToken })
      .pipe(
        tap((res) => {
          this.setTokens(res);
          this.refreshTokenSubject.next(res);
          this.refreshTokenInProgress = false;
        }),
        catchError((error) => {
          this.refreshTokenInProgress = false;
          this.logout();
          return throwError(() => error);
        })
      );
  }

  private setTokens(token:TokenResponse) {
    localStorage.setItem('token', token.accessToken);
    localStorage.setItem('refreshToken', token.refreshToken);
    localStorage.setItem('role', token.role);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('role');
  }

  getAccessToken() {
    return localStorage.getItem('token');
  }

  getRefreshToken() {
    return localStorage.getItem('refreshToken');
  }
}
