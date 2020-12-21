import { Component, Input, OnInit } from '@angular/core';
import { IPersonalGoal } from 'src/app/shared/interfaces/ipersonal-goal';

@Component({
  selector: 'app-separate-goal',
  templateUrl: './separate-goal.component.html',
  styleUrls: ['./separate-goal.component.css']
})
export class SeparateGoalComponent implements OnInit {
  @Input() goal: IPersonalGoal;
  public progressBarLength = '0%';
  constructor() { }

  ngOnInit(): void {
    this.getProgressValue(new Date(this.goal.startDate), this.goal.days)
  }

  getProgressValue(startDate: Date, goalLength){
    const now = new Date()
    const diff = Math.abs(startDate.getTime() - now.getTime());
    const days = diff/86400000
    console.log(days)
    const precentage = ((days/goalLength)*100)-1
    this.progressBarLength = Math.floor(precentage) + '%'
  }

}
