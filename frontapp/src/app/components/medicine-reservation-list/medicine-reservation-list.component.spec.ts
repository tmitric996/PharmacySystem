import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineReservationListComponent } from './medicine-reservation-list.component';

describe('MedicineReservationListComponent', () => {
  let component: MedicineReservationListComponent;
  let fixture: ComponentFixture<MedicineReservationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineReservationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineReservationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
