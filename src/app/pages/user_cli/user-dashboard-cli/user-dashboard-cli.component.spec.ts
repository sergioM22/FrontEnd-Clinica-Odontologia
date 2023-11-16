import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardCliComponent } from './user-dashboard-cli.component';

describe('UserDashboardCliComponent', () => {
  let component: UserDashboardCliComponent;
  let fixture: ComponentFixture<UserDashboardCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDashboardCliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDashboardCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
