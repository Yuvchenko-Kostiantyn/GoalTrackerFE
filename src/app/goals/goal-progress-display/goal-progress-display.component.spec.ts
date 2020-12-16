import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalProgressDisplayComponent } from './goal-progress-display.component';

describe('GoalProgressDisplayComponent', () => {
  let component: GoalProgressDisplayComponent;
  let fixture: ComponentFixture<GoalProgressDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalProgressDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalProgressDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
