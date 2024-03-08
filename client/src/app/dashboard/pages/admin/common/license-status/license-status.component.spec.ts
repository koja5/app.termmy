import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseStatusComponent } from './license-status.component';

describe('LicenseStatusComponent', () => {
  let component: LicenseStatusComponent;
  let fixture: ComponentFixture<LicenseStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
