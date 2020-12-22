import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Service for future registration and authorization API interaction
  constructor(private router: Router, private http: HttpClient) { }


  public isUserLoggedIn = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));
  private url = environment.apiUrl;

    registerUser(data): Observable<any>{
      return this.http.post(this.url + '/registration', data);
    }

    loginUser(data): Observable<any> {
      return this.http.post(this.url + '/login', data);
    }

    logout(data): Observable<any>{
      return this.http.get(this.url + '/signout');

    }
    updateToken(data): Observable<any>{
      console.log(data);
      return this.http.post(this.url + '/token-update', data);
    }
}
