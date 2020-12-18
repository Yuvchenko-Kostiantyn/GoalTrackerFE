import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Service for future registration and authorization API interaction
  constructor(private http: HttpClient) { }

  private url = '';

    registerUser(data): void{
      console.log(data);
    }
    loginUser(data): Observable<any> {
      return this.http.post(this.url+'/login', data);
    }
}
