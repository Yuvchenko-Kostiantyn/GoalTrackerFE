import { Component, OnInit } from '@angular/core';
import { IBadge } from '../shared/interfaces/ibadge';
import { IPersonalGoal } from '../shared/interfaces/ipersonal-goal';
import { BadgeService } from '../shared/services/badge.service';
import { GoalsService } from '../shared/services/goals.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public statistics;
  public goals: IPersonalGoal[];
  public badges: IBadge[];
  public userId = localStorage.getItem('userId');

  constructor(private goalsService: GoalsService, private badgesService: BadgeService) { }

  ngOnInit(): void {
    this.goalsService.getUserGoalsStatistics(this.userId)
    .subscribe(res => {
      console.log(res)
      this.statistics = res;
    });

    this.goalsService.getUsersGoalsByStatus(this.userId, 'IN_PROGRESS')
      .subscribe(res => {
        console.log(res)
        this.goals = res;
      });

    this.badgesService.getBadgesByUserId(this.userId)
      .subscribe(res => this.badges = res);
  }
}
