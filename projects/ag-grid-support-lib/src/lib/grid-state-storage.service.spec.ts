import { TestBed } from '@angular/core/testing';

import { GridStateStorageService } from './grid-state-storage.service';

describe('GridStateStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GridStateStorageService = TestBed.get(GridStateStorageService);
    expect(service).toBeTruthy();
  });
});
