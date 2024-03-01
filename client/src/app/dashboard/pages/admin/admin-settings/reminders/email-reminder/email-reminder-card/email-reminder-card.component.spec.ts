import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailReminderCardComponent } from './email-reminder-card.component';

describe('EmailReminderCardComponent', () => {
  let component: EmailReminderCardComponent;
  let fixture: ComponentFixture<EmailReminderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailReminderCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailReminderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
