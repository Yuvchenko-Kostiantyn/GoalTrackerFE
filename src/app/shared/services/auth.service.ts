import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Service for future registration and authorization API interaction
  constructor(private http: HttpClient) { }

  private url = 'http://3.87.91.14/api';


    registerUser(data): Observable<any>{
      return this.http.post(this.url + '/registration', data);
    }

    loginUser(data): Observable<any> {
      return this.http.post(this.url + '/login', data);
    }

    getUser(userId, headers): Observable<any> {
      return this.http.get(this.url + `/user/${userId}`, headers);
    }
    updateUser(body, headers, userId) {
      return this.http.put(this.url + `/user/${userId}`, body, headers);
    }
}
