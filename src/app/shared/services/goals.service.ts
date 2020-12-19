import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGoal } from '../interfaces/igoal';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  constructor(private http: HttpClient) { }
  private url = 'http://3.87.91.14/api';

  getGlobalGoals(): Observable<IGoal[]>{
    return this.http.get<IGoal[]>(this.url + '/global-goal/all');
  }
}
