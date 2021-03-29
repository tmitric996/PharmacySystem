import { TestBed } from '@angular/core/testing';

import { AllergiesServiceService } from './allergies-service.service';

describe('AllergiesServiceService', () => {
  let service: AllergiesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllergiesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
