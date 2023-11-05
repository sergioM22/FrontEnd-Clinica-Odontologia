import { TestBed } from '@angular/core/testing';
//PRUEBA DE CAMBIOS
import { CitaService } from './cita.service';

describe('CitaService', () => {
  let service: CitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
