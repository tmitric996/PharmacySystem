import { TestBed } from '@angular/core/testing';

import { CounselingServiceService } from './counseling-service.service';

describe('CounselingServiceService', () => {
  let service: CounselingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounselingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
