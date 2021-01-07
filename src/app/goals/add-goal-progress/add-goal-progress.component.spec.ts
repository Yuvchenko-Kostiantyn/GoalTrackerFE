import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AddGoalProgressComponent } from './add-goal-progress.component';


describe('AddGoalProgressComponent', () => {
  let component: AddGoalProgressComponent;
  let fixture: ComponentFixture<AddGoalProgressComponent>;
  let routeStub = {
    parent: {
      snapshot: {
        params: {
          goalId: 1,
        }
      }
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGoalProgressComponent ],
      imports: [ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [{provide: ActivatedRoute, useValue: routeStub }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGoalProgressComponent);
    component = fixture.componentInstance;

    // component.route.setParamMap({id: 1})

    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
