import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVoucherPartnersComponent } from './all-voucher-partners.component';

describe('AllVoucherPartnersComponent', () => {
  let component: AllVoucherPartnersComponent;
  let fixture: ComponentFixture<AllVoucherPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllVoucherPartnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllVoucherPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
