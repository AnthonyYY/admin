import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationRecordComponent } from './consultation-record.component';

describe('ConsultationRecordComponent', () => {
  let component: ConsultationRecordComponent;
  let fixture: ComponentFixture<ConsultationRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
