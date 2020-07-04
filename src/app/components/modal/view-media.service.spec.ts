import { TestBed } from '@angular/core/testing';

import { ViewMediaService } from './view-media.service';

describe('ViewMediaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewMediaService = TestBed.get(ViewMediaService);
    expect(service).toBeTruthy();
  });
});
