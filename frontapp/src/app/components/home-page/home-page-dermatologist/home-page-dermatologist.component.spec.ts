import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageDermatologistComponent } from './home-page-dermatologist.component';

describe('HomePageDermatologistComponent', () => {
  let component: HomePageDermatologistComponent;
  let fixture: ComponentFixture<HomePageDermatologistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageDermatologistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageDermatologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
