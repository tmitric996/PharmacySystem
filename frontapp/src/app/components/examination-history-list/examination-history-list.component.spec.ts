import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationHistoryListComponent } from './examination-history-list.component';

describe('ExaminationHistoryListComponent', () => {
  let component: ExaminationHistoryListComponent;
  let fixture: ComponentFixture<ExaminationHistoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExaminationHistoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
