import { TestBed } from '@angular/core/testing';

import { ExaminationServiceService } from './examination-service.service';

describe('ExaminationServiceService', () => {
  let service: ExaminationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExaminationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
