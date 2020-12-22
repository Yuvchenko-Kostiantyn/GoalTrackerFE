import { Component, OnInit } from '@angular/core';
import { IPersonalGoal } from '../shared/interfaces/ipersonal-goal';
import { GoalsService } from '../shared/services/goals.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public statistics;
  public goals: IPersonalGoal[];
  public userId = localStorage.getItem('userId');

  constructor(private goalsService: GoalsService) { }

  ngOnInit(): void {
    this.goalsService.getUserGoalsStatistics(this.userId)
    .subscribe(res => {
      this.statistics = res;
    });

    // this.goalsService.getUsersGoalsByStatus(this.userId, 'IN_PROGRESS')
    //   .subscribe(res => {
    //     console.log(res);
    //     this.goals = res
    //   });
  }
}
