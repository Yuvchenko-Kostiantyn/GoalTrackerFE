import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FormedGoal } from '../classes/formed-goal';
import { Seasons } from '../classes/seasons';
import { IGoal } from '../interfaces/igoal';



@Injectable({
  providedIn: 'root'
})

export class GoalsService {

  constructor(private http: HttpClient) { }
  private url = environment.apiUrl;

  getGlobalGoals(): Observable<IGoal[]>{
    return this.http.get<IGoal[]>(this.url + '/global-goal/all');
  }

  getGlobalGoalById(id): Observable<IGoal>{
    return this.http.get<IGoal>(this.url + `/global-goal/${id}`);
  }

  getGlobalGoalsBySeason(season: Seasons): Observable<IGoal[]>{
    return this.http.get<IGoal[]>(this.url + `/global-goal?season=${season}`);
  }

  addPersonalGoal(body: FormedGoal): Observable<IGoal>{
    return this.http.post<IGoal>(this.url + `/personal-goal`, body);
  }

  getUsersPersonalGoals(userId: string): Observable<IGoal[]>{
    return this.http.get<IGoal[]>(this.url + `/personal-goal/all?userId=${userId}`);
  }
}
