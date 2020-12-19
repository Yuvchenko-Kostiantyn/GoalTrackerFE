import { HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req, next): Observable<HttpEvent<any>>{
    const token = localStorage.getItem('token');
    if (!token) {
      return next.handle(req);
    }
    const tokenizedRequest = req.clone({
      setHeaders: {
        Authorization: token,
      }
    });
    return next.handle(tokenizedRequest);
  }
}
