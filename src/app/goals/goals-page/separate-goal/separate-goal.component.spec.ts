import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { GoalsService } from 'src/app/shared/services/goals.service';

import { SeparateGoalComponent } from './separate-goal.component';

describe('SeparateGoalComponent', () => {
  let component: SeparateGoalComponent;
  let fixture: ComponentFixture<SeparateGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeparateGoalComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [GoalsService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparateGoalComponent);
    component = fixture.componentInstance;

    component.goal = {
      id: 1,
      name: 'Test Goal 1',
      description: 'Test Goal Description',
      season: 'ALL_YEAR',
      days: 20,
      startDate: new Date(),
      endDate: new Date(),
      pausedDate: new Date(),
      status: 'IN_PROGRESS'
    }

    fixture.detectChanges();
  });

  it('should create', () => {

  })
});
