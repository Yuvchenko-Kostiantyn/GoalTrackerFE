import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FormedGoal } from '../classes/formed-goal';
import { Seasons } from '../classes/seasons';
import { IGoal } from '../interfaces/igoal';
import { IPersonalGoal } from '../interfaces/ipersonal-goal';
import { Iprogress } from '../interfaces/iprogress';

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

  getUsersPersonalGoals(userId: string): Observable<IPersonalGoal[]>{
    return this.http.get<IPersonalGoal[]>(`${this.url}/personal-goal/all?userId=${userId}`);
  }

  getUserGoalById(goalId: string, userId: string): Observable<IPersonalGoal>{
    return this.http.get<IPersonalGoal>(`${this.url}/personal-goal?userId=${userId}&personalGoalId=${goalId}`);
  }

  deleteUserGoal(goalId): Observable<any>{
    return this.http.delete(`${this.url}/day-progress?id=${goalId}`);
  }

  addGoalProgress(body: Iprogress): Observable<any>{
    return this.http.post(`${this.url}/day-progress/`, body);
  }

  getDayProgress(goalId): Observable<any>{
    return this.http.get(`${this.url}/day-progress/all?personalGoalId=${goalId}`);
  }

  getUserGoalsStatistics(userId): Observable<any>{
    return this.http.get(`${this.url}/personal-goal/all-grouped?userId=${userId}`);
  }

  getUsersGoalsByStatus(userId, status): Observable<IPersonalGoal[]>{
    return this.http.get<IPersonalGoal[]>(`${this.url}/personal-goal/all?userId=${userId}&status=${status}`);
  }
}
