/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FinnhubService } from './finnhub.service';

describe('Service: Finnhub', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinnhubService]
    });
  });

  it('should ...', inject([FinnhubService], (service: FinnhubService) => {
    expect(service).toBeTruthy();
  }));
});
