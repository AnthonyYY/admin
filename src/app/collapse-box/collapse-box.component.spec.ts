import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseBoxComponent } from './collapse-box.component';

describe('CollapseBoxComponent', () => {
  let component: CollapseBoxComponent;
  let fixture: ComponentFixture<CollapseBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapseBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
