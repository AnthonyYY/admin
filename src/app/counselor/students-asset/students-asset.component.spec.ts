import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsAssetComponent } from './students-asset.component';

describe('StudentsAssetComponent', () => {
  let component: StudentsAssetComponent;
  let fixture: ComponentFixture<StudentsAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
