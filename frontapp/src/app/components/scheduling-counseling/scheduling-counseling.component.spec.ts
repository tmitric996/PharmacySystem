import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingCounselingComponent } from './scheduling-counseling.component';

describe('SchedulingCounselingComponent', () => {
  let component: SchedulingCounselingComponent;
  let fixture: ComponentFixture<SchedulingCounselingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulingCounselingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulingCounselingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
