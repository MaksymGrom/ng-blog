import { TestBed } from '@angular/core/testing';

import { AdminAuthInterceptor } from './admin-auth.interceptor';

describe('AdminAuthInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AdminAuthInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AdminAuthInterceptor = TestBed.inject(AdminAuthInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
