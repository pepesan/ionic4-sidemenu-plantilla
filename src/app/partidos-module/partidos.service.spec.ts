import { TestBed } from '@angular/core/testing';

import { PartidosService } from './partidos.service';

describe('PartidosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PartidosService = TestBed.get(PartidosService);
    expect(service).toBeTruthy();
  });
});
