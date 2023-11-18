import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaCliModalComponent } from './cita-cli-modal.component';

describe('CitaCliModalComponent', () => {
  let component: CitaCliModalComponent;
  let fixture: ComponentFixture<CitaCliModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitaCliModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitaCliModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
