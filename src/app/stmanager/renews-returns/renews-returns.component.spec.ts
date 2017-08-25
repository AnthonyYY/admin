import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewsReturnsComponent } from './renews-returns.component';

describe('RenewsReturnsComponent', () => {
  let component: RenewsReturnsComponent;
  let fixture: ComponentFixture<RenewsReturnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenewsReturnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewsReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
