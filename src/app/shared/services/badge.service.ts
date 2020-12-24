import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBadge } from '../interfaces/ibadge';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {
  constructor(private router: Router, private http: HttpClient) { }

  public isUserLoggedIn = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));
  private url = environment.apiUrl;

    getBadgesByUserId(userId): Observable<IBadge[]> {
      return this.http.get<IBadge[]>(this.url + `/badge/all/${userId}`);
    }
    getPersonalGoalBadges(personalGoalId): Observable<IBadge[]> {
      return this.http.get<IBadge[]>(`${this.url}/all?personalGoalId=${personalGoalId}`);
    }
}
