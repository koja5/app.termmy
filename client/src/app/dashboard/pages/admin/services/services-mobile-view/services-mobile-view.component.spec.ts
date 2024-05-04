import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesMobileViewComponent } from './services-mobile-view.component';

describe('ServicesMobileViewComponent', () => {
  let component: ServicesMobileViewComponent;
  let fixture: ComponentFixture<ServicesMobileViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesMobileViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesMobileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
