import { TestBed } from '@angular/core/testing';

import { QuickSortService } from './quick-sort.service';

describe('QuickSortService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuickSortService = TestBed.get(QuickSortService);
    expect(service).toBeTruthy();
  });
});
