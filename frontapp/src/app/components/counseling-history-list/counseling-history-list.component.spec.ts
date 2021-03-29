import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounselingHistoryListComponent } from './counseling-history-list.component';

describe('CounselingHistoryListComponent', () => {
  let component: CounselingHistoryListComponent;
  let fixture: ComponentFixture<CounselingHistoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounselingHistoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounselingHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
