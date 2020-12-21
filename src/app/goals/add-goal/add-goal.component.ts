import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormedGoal } from 'src/app/shared/classes/formed-goal';
import { IGoal } from 'src/app/shared/interfaces/igoal';
import { GoalsService } from 'src/app/shared/services/goals.service';


@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal.component.html',
  styleUrls: ['./add-goal.component.css']
})

export class AddGoalComponent implements OnInit {
  public goalType = 'global';
  public globalGoals: IGoal[];
  public seasons = ['ALL YEAR', 'SUMMER', 'WINTER', 'SPRING', 'AUTUMN'];

  constructor(private goalsService: GoalsService, private router: Router) { }

  ngOnInit(): void {
    this.goalsService.getGlobalGoals()
      .subscribe(
        res => {
        this.globalGoals = res;
        console.log(this.globalGoals);
        },
        err => {
          console.error(err.message);
        }
      );
  }

  changeGoalType(value: string): void{
    this.goalType = value;
  }

  getEndDate(startDate: Date, goalTerm: number): Date{
    const dateCopy = new Date(startDate);
    const addedDate = dateCopy.setDate(dateCopy.getDate() + goalTerm);
    return new Date(addedDate);
  }

  createCustomPersonalGoal(goal): void{
    // It does look horrible, but BE didn't have enough time so i had to
    // and i barely had time too, so right now it kinda works like it does
    const {goalName, goalTerm, startDate, seasonId, description} = goal;
    const startingDate = new Date(startDate);
    const userId = parseInt(localStorage.getItem('userId'), 10);
    const endDate = this.getEndDate(startingDate, goalTerm);
    const formedGoal = new FormedGoal(goalName, startingDate, endDate, -1, userId, this.seasons[seasonId], description, null);

    this.addPersonalGoal(formedGoal);
  }

  createGlobalPersonalGoal(goal): void{
    const {days, id, name, season, description} = goal;
    const userId = parseInt(localStorage.getItem('userId'), 10);
    const startingDate = new Date();
    const endDate = this.getEndDate(startingDate, days);
    const formedGoal = new FormedGoal(name, startingDate, endDate, id, userId, season, description, null);

    this.addPersonalGoal(formedGoal);
  }

  addPersonalGoal(body: FormedGoal): void{
      console.log(body);
      this.goalsService.addPersonalGoal(body)
        .subscribe(
        res => {
          console.log(res),
          this.router.navigate(['/goals']);
        },
        error => console.error(error)
    );
  }
}
