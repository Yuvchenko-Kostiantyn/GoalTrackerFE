import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private router: Router, private http: HttpClient) { }


  public isUserLoggedIn = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));
  private url = environment.apiUrl;

    getUser(userId, headers): Observable<any> {
      return this.http.get(this.url + `/user/${userId}`, headers);
    }
    updateUser(body, headers, userId): Observable<any> {
      return this.http.put(this.url + `/user/${userId}`, body, headers);
    }
}
