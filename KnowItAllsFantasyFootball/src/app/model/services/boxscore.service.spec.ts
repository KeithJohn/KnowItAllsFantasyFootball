import { TestBed } from '@angular/core/testing';

import { BoxscoreService } from './boxscore.service';

describe('BoxscoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoxscoreService = TestBed.get(BoxscoreService);
    expect(service).toBeTruthy();
  });
});
