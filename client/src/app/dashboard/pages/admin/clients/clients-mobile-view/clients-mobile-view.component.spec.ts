import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsMobileViewComponent } from './clients-mobile-view.component';

describe('ClientsMobileViewComponent', () => {
  let component: ClientsMobileViewComponent;
  let fixture: ComponentFixture<ClientsMobileViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsMobileViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsMobileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
