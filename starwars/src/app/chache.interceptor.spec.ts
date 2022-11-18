import { TestBed } from '@angular/core/testing';

import { ChacheInterceptor } from './chache.interceptor';

describe('ChacheInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ChacheInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ChacheInterceptor = TestBed.inject(ChacheInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
