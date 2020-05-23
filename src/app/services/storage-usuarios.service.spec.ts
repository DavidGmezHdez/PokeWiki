import { TestBed } from '@angular/core/testing';

import { StorageUsuariosService } from './storage-usuarios.service';

describe('StorageUsuariosService', () => {
  let service: StorageUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
