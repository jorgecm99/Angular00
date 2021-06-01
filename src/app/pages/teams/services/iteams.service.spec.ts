import { TestBed } from '@angular/core/testing';

import { IteamsService } from './iteams.service';

describe('IteamsService', () => {
  let service: IteamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IteamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
