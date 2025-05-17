import { HttpErrorResponse, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  const addToken = (request: HttpRequest<unknown>) => {
    const token = authService.getAccessToken();
    if (!token) return request;
    
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
  }
  const handle401Error = (error: HttpErrorResponse) => {
    const refreshToken = authService.getRefreshToken();
    if (!refreshToken) {
      authService.logout();
      return throwError(() => error);
    }

    return authService.refreshToken().pipe(
      switchMap((tokens) => {
        const clonedRequest = req.clone({
          setHeaders: {
            Authorization: `Bearer ${tokens.accessToken}`
          }
        });
        return next(clonedRequest);
      }),
      catchError((refreshError) => {
        authService.logout();
        return throwError(() => refreshError);
      })
    );
  

  }
  return next(addToken(req)).pipe(
    catchError((error) => {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        return handle401Error(error);
      }
      return throwError(() => error);
    })
  );
};


