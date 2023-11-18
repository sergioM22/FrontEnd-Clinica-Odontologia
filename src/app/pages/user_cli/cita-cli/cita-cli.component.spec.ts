import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaCliComponent } from './cita-cli.component';

describe('CitaCliComponent', () => {
  let component: CitaCliComponent;
  let fixture: ComponentFixture<CitaCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitaCliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitaCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
