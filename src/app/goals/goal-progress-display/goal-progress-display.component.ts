import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPersonalGoal } from 'src/app/shared/interfaces/ipersonal-goal';
import { GoalsService } from 'src/app/shared/services/goals.service';

@Component({
  selector: 'app-goal-progress-display',
  templateUrl: './goal-progress-display.component.html',
  styleUrls: ['./goal-progress-display.component.css']
})
export class GoalProgressDisplayComponent implements OnInit {

  constructor(private goalsService: GoalsService, private route: ActivatedRoute) { }

  public goalId: string;
  public userId: string;
  public goal: IPersonalGoal;

  ngOnInit(): void {
    this.goalId = this.route.snapshot.params.goalId;
    this.userId = localStorage.getItem('userId');

    this.goalsService.getUserGoalById(this.goalId, this.userId)
    .subscribe(
      res => {
        this.goal = res,
        console.log(this.goal)
      },
      err => console.error(err)
    )
  }

}
