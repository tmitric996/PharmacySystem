import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePagePharmacistComponent } from './home-page-pharmacist.component';

describe('HomePagePharmacistComponent', () => {
  let component: HomePagePharmacistComponent;
  let fixture: ComponentFixture<HomePagePharmacistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePagePharmacistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePagePharmacistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
