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
  // private url = environment.apiUrl;
  private url = 'http://ec2-54-160-242-66.compute-1.amazonaws.com/api';

    registerUser(data): Observable<any>{
      return this.http.post(this.url + '/registration', data);
    }

    loginUser(data): Observable<any> {
      return this.http.post(this.url + '/login', data);
    }

    logout(data): Observable<any>{
      return this.http.get(this.url + '/signout');
    }

    logUserOut(): void{
      this.isUserLoggedIn.next(false);
      localStorage.clear();
      this.router.navigate(['/']);
    }

    updateToken(data): Observable<any>{
      return this.http.post(this.url + '/token-update', data);
    }
}
