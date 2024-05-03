import { TestBed } from '@angular/core/testing';

import { EventWearApiService } from './event-wear-api.service';

describe('EventWearApiService', () => {
  let service: EventWearApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventWearApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
