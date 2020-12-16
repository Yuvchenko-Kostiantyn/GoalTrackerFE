import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoalsRoutingModule } from './goals-routing.module';
import { GoalsPageComponent } from './goals-page/goals-page.component';
import { GoalProgressComponent } from './goal-progress/goal-progress.component';
import { GoalProgressDisplayComponent } from './goal-progress-display/goal-progress-display.component';
import { AddGoalComponent } from './add-goal/add-goal.component';
import { AddGoalProgressComponent } from './add-goal-progress/add-goal-progress.component';


@NgModule({
  declarations: [
    GoalsPageComponent,
    GoalProgressComponent,
    GoalProgressDisplayComponent,
    AddGoalComponent,
    AddGoalProgressComponent],
  imports: [
    CommonModule,
    GoalsRoutingModule
  ]
})
export class GoalsModule { }
