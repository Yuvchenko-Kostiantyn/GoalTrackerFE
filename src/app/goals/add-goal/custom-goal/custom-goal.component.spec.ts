import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomGoalComponent } from './custom-goal.component';

describe('CustomGoalComponent', () => {
  let component: CustomGoalComponent;
  let fixture: ComponentFixture<CustomGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomGoalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
