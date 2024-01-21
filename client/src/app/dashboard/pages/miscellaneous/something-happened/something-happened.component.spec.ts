import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomethingHappenedComponent } from './something-happened.component';

describe('SomethingHappenedComponent', () => {
  let component: SomethingHappenedComponent;
  let fixture: ComponentFixture<SomethingHappenedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomethingHappenedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomethingHappenedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
