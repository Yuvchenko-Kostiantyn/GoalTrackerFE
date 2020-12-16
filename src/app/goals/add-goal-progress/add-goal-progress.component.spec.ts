import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGoalProgressComponent } from './add-goal-progress.component';

describe('AddGoalProgressComponent', () => {
  let component: AddGoalProgressComponent;
  let fixture: ComponentFixture<AddGoalProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGoalProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGoalProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
