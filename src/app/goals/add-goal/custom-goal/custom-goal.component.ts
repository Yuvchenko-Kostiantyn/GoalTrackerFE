import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-goal',
  templateUrl: './custom-goal.component.html',
  styleUrls: ['./custom-goal.component.css']
})
export class CustomGoalComponent implements OnInit {

  @Output() goalSubmit = new EventEmitter();
  public goalForm: FormGroup;
  @Input() seasons;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.goalForm = this.fb.group({
      goalName: ['', Validators.required],
      goalTerm: ['', Validators.required],
      description: [''],
      startDate: ['', Validators.required],
      seasonId: ['', Validators.required]
    });
  }

  onGoalSubmit(): void{
    this.goalSubmit.emit(this.goalForm.value);
  }

}
