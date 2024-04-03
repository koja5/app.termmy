import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsCounterComponent } from './sms-counter.component';

describe('SmsCounterComponent', () => {
  let component: SmsCounterComponent;
  let fixture: ComponentFixture<SmsCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
