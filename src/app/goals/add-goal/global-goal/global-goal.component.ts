import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { IGoal } from 'src/app/shared/interfaces/igoal';


@Component({
  selector: 'app-global-goal',
  templateUrl: './global-goal.component.html',
  styleUrls: ['./global-goal.component.css']
})
export class GlobalGoalComponent implements OnInit {

  @Input() globalGoals: IGoal[];
  @Output() goalSubmit = new EventEmitter();
  public selectedGoal: IGoal;
  constructor() { }

  ngOnInit(): void {
    this.selectedGoal = this.globalGoals[0];
  }

  onSelectChange(event): void{
    this.selectedGoal = this.globalGoals.find(goal => goal.id === parseInt(event.target.value, 10));
  }

  onGoalSubmit(): void{
    this.goalSubmit.emit(this.selectedGoal);
  }
}
