import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { IPersonalGoal } from 'src/app/shared/interfaces/ipersonal-goal';
import { GoalsService } from 'src/app/shared/services/goals.service';

@Component({
  selector: 'app-separate-goal',
  templateUrl: './separate-goal.component.html',
  styleUrls: ['./separate-goal.component.css']
})
export class SeparateGoalComponent implements OnInit {
  @Input() goal: IPersonalGoal;
  public progressBarLength = '0%';
  constructor(private goalsService: GoalsService) { }

  ngOnInit(): void {
    this.goalsService.getDayProgress(this.goal.id).pipe(
      map(data => data.length)
    )
      .subscribe(res => {
        this.getProgressValue(this.goal.days, res)
      })
    
  }

  getProgressValue(data, length): void{
    const precentage = (length / data) * 100
    this.progressBarLength = precentage + '%'
  }
}
