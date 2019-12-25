import { TestBed } from '@angular/core/testing';

import { Json2csvService } from './json2csv.service';

describe('Json2csvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Json2csvService = TestBed.get(Json2csvService);
    expect(service).toBeTruthy();
  });
});
