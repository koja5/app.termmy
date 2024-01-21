import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedMailComponent } from './verified-mail.component';

describe('VerifiedMailComponent', () => {
  let component: VerifiedMailComponent;
  let fixture: ComponentFixture<VerifiedMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifiedMailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifiedMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
