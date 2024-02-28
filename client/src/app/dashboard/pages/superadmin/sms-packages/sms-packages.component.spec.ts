import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsPackagesComponent } from './sms-packages.component';

describe('SmsPackagesComponent', () => {
  let component: SmsPackagesComponent;
  let fixture: ComponentFixture<SmsPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsPackagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmsPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
