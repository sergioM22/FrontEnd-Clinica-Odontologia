import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCliComponent } from './profile-cli.component';

describe('ProfileCliComponent', () => {
  let component: ProfileCliComponent;
  let fixture: ComponentFixture<ProfileCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileCliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
