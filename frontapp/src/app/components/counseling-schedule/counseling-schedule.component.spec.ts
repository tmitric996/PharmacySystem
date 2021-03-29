import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounselingScheduleComponent } from './counseling-schedule.component';

describe('CounselingScheduleComponent', () => {
  let component: CounselingScheduleComponent;
  let fixture: ComponentFixture<CounselingScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounselingScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounselingScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
