import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcDirectorComponent } from './tc-director.component';

describe('TcDirectorComponent', () => {
  let component: TcDirectorComponent;
  let fixture: ComponentFixture<TcDirectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcDirectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
