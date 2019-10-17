import { TestBed } from '@angular/core/testing';

import { NflGameService } from './nfl-game.service';

describe('NflGameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NflGameService = TestBed.get(NflGameService);
    expect(service).toBeTruthy();
  });
});
