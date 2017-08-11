import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateRangerPickerComponent } from './date-ranger-picker.component';

describe('DateRangerPickerComponent', () => {
  let component: DateRangerPickerComponent;
  let fixture: ComponentFixture<DateRangerPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateRangerPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateRangerPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
