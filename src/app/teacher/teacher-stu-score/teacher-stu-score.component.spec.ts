import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherStuScoreComponent } from './teacher-stu-score.component';

describe('TeacherStuScoreComponent', () => {
  let component: TeacherStuScoreComponent;
  let fixture: ComponentFixture<TeacherStuScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherStuScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherStuScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
