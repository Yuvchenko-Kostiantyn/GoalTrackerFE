import { Component, OnInit } from '@angular/core';
import { GoalsService } from 'src/app/shared/services/goals.service';

@Component({
  selector: 'app-goals-page',
  templateUrl: './goals-page.component.html',
  styleUrls: ['./goals-page.component.css']
})
export class GoalsPageComponent implements OnInit {

  public goals;
  public userId = localStorage.getItem('userId');

  constructor(private goalsService: GoalsService) { }

  ngOnInit(): void {
    this.goalsService.getUsersPersonalGoals(this.userId)
    .subscribe(
      res => this.goals = res,
      err => console.error(err)
    );
  }

}
