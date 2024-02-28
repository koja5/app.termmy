import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyMoreSmsComponent } from './buy-more-sms.component';

describe('BuyMoreSmsComponent', () => {
  let component: BuyMoreSmsComponent;
  let fixture: ComponentFixture<BuyMoreSmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyMoreSmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyMoreSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
