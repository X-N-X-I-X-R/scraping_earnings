/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Companyn_newsService } from './companyn_news.service';

describe('Service: Companyn_news', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Companyn_newsService]
    });
  });

  it('should ...', inject([Companyn_newsService], (service: Companyn_newsService) => {
    expect(service).toBeTruthy();
  }));
});
