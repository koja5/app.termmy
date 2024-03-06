import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewayCountryPrefixComponent } from './gateway-country-prefix.component';

describe('GatewayCountryPrefixComponent', () => {
  let component: GatewayCountryPrefixComponent;
  let fixture: ComponentFixture<GatewayCountryPrefixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatewayCountryPrefixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GatewayCountryPrefixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
