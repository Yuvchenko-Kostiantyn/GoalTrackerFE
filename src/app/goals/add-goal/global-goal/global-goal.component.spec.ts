import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalGoalComponent } from './global-goal.component';

describe('GlobalGoalComponent', () => {
  let component: GlobalGoalComponent;
  let fixture: ComponentFixture<GlobalGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalGoalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
