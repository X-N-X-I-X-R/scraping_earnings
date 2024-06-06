/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlphaVantageService } from './alpha-vantage.service';

describe('Service: AlphaVantage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlphaVantageService]
    });
  });

  it('should ...', inject([AlphaVantageService], (service: AlphaVantageService) => {
    expect(service).toBeTruthy();
  }));
});
