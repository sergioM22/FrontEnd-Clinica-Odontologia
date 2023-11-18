import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaCliDialogComponent } from './cita-cli-dialog.component';

describe('CitaCliDialogComponent', () => {
  let component: CitaCliDialogComponent;
  let fixture: ComponentFixture<CitaCliDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitaCliDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitaCliDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
