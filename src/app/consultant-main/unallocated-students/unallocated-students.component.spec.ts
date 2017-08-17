import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnallocatedStudentsComponent } from './unallocated-students.component';

describe('UnallocatedStudentsComponent', () => {
  let component: UnallocatedStudentsComponent;
  let fixture: ComponentFixture<UnallocatedStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnallocatedStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnallocatedStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
