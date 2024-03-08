import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensePackagesComponent } from './license-packages.component';

describe('LicensePackagesComponent', () => {
  let component: LicensePackagesComponent;
  let fixture: ComponentFixture<LicensePackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicensePackagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicensePackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
