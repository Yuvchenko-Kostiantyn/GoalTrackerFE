import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { IGoal } from 'src/app/shared/interfaces/igoal';
import { GoalsService } from 'src/app/shared/services/goals.service';

@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal.component.html',
  styleUrls: ['./add-goal.component.css']
})
export class AddGoalComponent implements OnInit {
  globalGoals: IGoal[];

  constructor(private goalsService: GoalsService) { }

  ngOnInit(): void {

  }
}
