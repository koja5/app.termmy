import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsReminderCardComponent } from './sms-reminder-card.component';

describe('SmsReminderCardComponent', () => {
  let component: SmsReminderCardComponent;
  let fixture: ComponentFixture<SmsReminderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsReminderCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmsReminderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
