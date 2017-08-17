import { TestBed, inject } from '@angular/core/testing';

import { ConsultantMainService } from './consultant-main.service';

describe('ConsultantMainService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultantMainService]
    });
  });

  it('should be created', inject([ConsultantMainService], (service: ConsultantMainService) => {
    expect(service).toBeTruthy();
  }));
});
