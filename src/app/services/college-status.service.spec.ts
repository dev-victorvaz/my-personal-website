import { TestBed } from '@angular/core/testing';

import { CollegeStatusService } from './college-status.service';

describe('CollegeStatusService', () => {
  let service: CollegeStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollegeStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
