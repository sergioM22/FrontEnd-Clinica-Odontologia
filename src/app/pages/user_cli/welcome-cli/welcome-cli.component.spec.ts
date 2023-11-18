import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeCliComponent } from './welcome-cli.component';

describe('WelcomeCliComponent', () => {
  let component: WelcomeCliComponent;
  let fixture: ComponentFixture<WelcomeCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeCliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
