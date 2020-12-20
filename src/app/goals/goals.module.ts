import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoalsRoutingModule } from './goals-routing.module';
import { GoalsPageComponent } from './goals-page/goals-page.component';
import { GoalProgressComponent } from './goal-progress/goal-progress.component';
import { GoalProgressDisplayComponent } from './goal-progress-display/goal-progress-display.component';
import { AddGoalComponent } from './add-goal/add-goal.component';
import { AddGoalProgressComponent } from './add-goal-progress/add-goal-progress.component';
import { CustomGoalComponent } from './add-goal/custom-goal/custom-goal.component';
import { GlobalGoalComponent } from './add-goal/global-goal/global-goal.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GoalsPageComponent,
    GoalProgressComponent,
    GoalProgressDisplayComponent,
    AddGoalComponent,
    AddGoalProgressComponent,
    CustomGoalComponent,
    GlobalGoalComponent],
  imports: [
    CommonModule,
    GoalsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class GoalsModule { }
