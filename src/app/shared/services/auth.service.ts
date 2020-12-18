import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Service for future registration and authorization API interaction
  constructor(private http: HttpClient) { }
  private url = ''

    registerUser(data): Observable<any>{
      return this.http.post(this.url+'/registration', data)
    }

    loginUser(data): boolean {
      console.log(data);
      return true;
    }
}
