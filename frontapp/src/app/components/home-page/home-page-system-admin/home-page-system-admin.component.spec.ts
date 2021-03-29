import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageSystemAdminComponent } from './home-page-system-admin.component';

describe('HomePageSystemAdminComponent', () => {
  let component: HomePageSystemAdminComponent;
  let fixture: ComponentFixture<HomePageSystemAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageSystemAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageSystemAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
