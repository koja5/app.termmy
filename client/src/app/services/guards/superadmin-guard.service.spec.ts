import { TestBed } from '@angular/core/testing';

import { SuperadminGuardService } from './superadmin-guard.service';

describe('SuperadminGuardService', () => {
  let service: SuperadminGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperadminGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
