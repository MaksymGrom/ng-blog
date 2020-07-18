import { TestBed } from '@angular/core/testing';

import { AdminGuestGuard } from './admin-guest.guard';

describe('AdminGuestGuard', () => {
  let guard: AdminGuestGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminGuestGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
