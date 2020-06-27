import { TestBed } from '@angular/core/testing';

import { AppointmentDatetimePickerRwdService } from './appointment-datetime-picker-rwd.service';

describe('AppointmentDatetimePickerRwdService', () => {
  let service: AppointmentDatetimePickerRwdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentDatetimePickerRwdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
