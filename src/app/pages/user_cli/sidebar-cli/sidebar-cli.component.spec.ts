import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCliComponent } from './sidebar-cli.component';

describe('SidebarCliComponent', () => {
  let component: SidebarCliComponent;
  let fixture: ComponentFixture<SidebarCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarCliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
