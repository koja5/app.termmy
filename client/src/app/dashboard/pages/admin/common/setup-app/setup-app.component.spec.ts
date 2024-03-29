import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupAppComponent } from './setup-app.component';

describe('SetupAppComponent', () => {
  let component: SetupAppComponent;
  let fixture: ComponentFixture<SetupAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetupAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
