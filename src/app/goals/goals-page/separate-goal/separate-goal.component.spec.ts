import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparateGoalComponent } from './separate-goal.component';

describe('SeparateGoalComponent', () => {
  let component: SeparateGoalComponent;
  let fixture: ComponentFixture<SeparateGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeparateGoalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparateGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
