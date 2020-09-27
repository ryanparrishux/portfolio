import { TestBed } from '@angular/core/testing';

import { IsSmallService } from './issmall.service';

describe('IssmallService', () => {
  let service: IsSmallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsSmallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
