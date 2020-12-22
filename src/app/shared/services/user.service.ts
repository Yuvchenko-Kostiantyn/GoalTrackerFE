import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private router: Router, private http: HttpClient) { }


  public isUserLoggedIn = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));
  // private url = environment.apiUrl;
  private url = 'http://localhost:8081';

    getUser(userId): Observable<IUser> {
      return this.http.get<IUser>(this.url + `/user/${userId}`);
    }

    updateUser(body, userId): Observable<IUser> {
      return this.http.put<IUser>(this.url + `/user/${userId}`, body);
    }
}
