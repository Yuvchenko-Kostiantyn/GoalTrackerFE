import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddGoalProgressComponent } from './add-goal-progress/add-goal-progress.component';
import { AddGoalComponent } from './add-goal/add-goal.component';
import { GoalProgressDisplayComponent } from './goal-progress-display/goal-progress-display.component';
import { GoalProgressComponent } from './goal-progress/goal-progress.component';
import { GoalsPageComponent } from './goals-page/goals-page.component';

const routes: Routes = [
  {path: '', component: GoalsPageComponent},
  {path: 'add', component: AddGoalComponent},
  {
    path: ':goalId', component: GoalProgressComponent,
    children: [
      {path: '', component: GoalProgressDisplayComponent},
      {path: 'addprogress', component: AddGoalProgressComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoalsRoutingModule { }
