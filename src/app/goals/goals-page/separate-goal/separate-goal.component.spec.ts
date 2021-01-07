import { HttpClientTestingModule} from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { from, of } from 'rxjs';
import { GoalsService } from 'src/app/shared/services/goals.service';

import { SeparateGoalComponent } from './separate-goal.component';

describe('SeparateGoalComponent', () => {
  let component: SeparateGoalComponent;
  let fixture: ComponentFixture<SeparateGoalComponent>;
  let getGoalSpy

  beforeEach(async () => {
    let mockData = {length: 5}
    const goalsService = jasmine.createSpyObj('GoalsService', ['getDayProgress']);
    getGoalSpy = goalsService.getDayProgress.and.returnValue(of(mockData))

    await TestBed.configureTestingModule({
      declarations: [ SeparateGoalComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [{provide: GoalsService, useValue: goalsService}]
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

  it('should create', () => {})

  it('should count the precentage', () => {
    component.getProgressValue(20, 10);
    expect(component.progressBarLength).toEqual('50%')
  })

  it('should retirieve a value', fakeAsync(() => {
    expect(getGoalSpy).toHaveBeenCalled();
  }))
});
