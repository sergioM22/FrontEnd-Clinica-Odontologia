import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadCliComponent } from './load-cli.component';

describe('LoadCliComponent', () => {
  let component: LoadCliComponent;
  let fixture: ComponentFixture<LoadCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadCliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
