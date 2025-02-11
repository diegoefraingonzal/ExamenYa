import { TestBed } from '@angular/core/testing';

import { ZenquotesService } from './zenquotes.service';

describe('ZenquotesService', () => {
  let service: ZenquotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZenquotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
