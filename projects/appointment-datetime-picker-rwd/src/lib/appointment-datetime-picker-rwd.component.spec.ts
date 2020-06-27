import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentDatetimePickerRwdComponent } from './appointment-datetime-picker-rwd.component';

describe('AppointmentDatetimePickerRwdComponent', () => {
  let component: AppointmentDatetimePickerRwdComponent;
  let fixture: ComponentFixture<AppointmentDatetimePickerRwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentDatetimePickerRwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentDatetimePickerRwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
