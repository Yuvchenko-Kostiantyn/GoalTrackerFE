import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  private invalidTokenError = 'JWT token is expired or invalid';
  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any>{
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.error.message === this.invalidTokenError){
          this.authService.logUserOut();
        }
        return throwError(err);
      })
    );
  }
}
