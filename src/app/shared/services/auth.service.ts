import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Service for future registration and authorization API interaction
  constructor(private router: Router, private http: HttpClient) { }

  public isUserLoggedIn = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));
  private url = 'http://3.87.91.14:8081';


    registerUser(data): Observable<any>{
      return this.http.post(this.url + '/registration', data);
    }

    loginUser(data): boolean {
      console.log(data);
      return true;
    }

    logout(){
      this.isUserLoggedIn.next(false);
      localStorage.clear();
      this.router.navigate(['/']);
    }
}
