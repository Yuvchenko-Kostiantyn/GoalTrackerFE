import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { GoalsService } from 'src/app/shared/services/goals.service';

@Component({
  selector: 'app-add-goal-progress',
  templateUrl: './add-goal-progress.component.html',
  styleUrls: ['./add-goal-progress.component.css']
})
export class AddGoalProgressComponent implements OnInit {

  public goalId;
  public progressData = [];
  public progressProof: FormControl;

  constructor(
    private fb: FormBuilder,
    private goalsService: GoalsService,
    private route: ActivatedRoute,
  ) { }


  ngOnInit(): void {
    this.goalId = this.route.parent.snapshot.params.goalId;
    this.progressProof = this.fb.control(' ');
    this.goalsService.getDayProgress(this.goalId)
      .subscribe(res => this.progressData = res);
  }

  submitProgress(): void{
    const body = {
      date: new Date(),
      url: this.progressProof.value,
      personalGoalid: this.goalId,
    };

    this.goalsService.addGoalProgress(body).subscribe(
      () => {
        this.progressProof.setValue('');
        this.progressData.push(body);
      },
      err => console.error(err)
    );
  }

}
