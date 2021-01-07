import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { GoalsService } from './goals.service';

describe('GoalsService', () => {
  let service: GoalsService;
  let httpTC: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(GoalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
