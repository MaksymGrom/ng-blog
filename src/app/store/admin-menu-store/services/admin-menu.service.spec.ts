import { TestBed } from '@angular/core/testing';

import { AdminMenuService } from './admin-menu.service';

describe('AdminMenuService', () => {
  let service: AdminMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
