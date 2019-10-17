import { TestBed } from '@angular/core/testing';

import { FreeAgentService } from './free-agent.service';

describe('FreeAgentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FreeAgentService = TestBed.get(FreeAgentService);
    expect(service).toBeTruthy();
  });
});
