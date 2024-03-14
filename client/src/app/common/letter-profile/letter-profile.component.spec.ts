import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterProfileComponent } from './letter-profile.component';

describe('LetterProfileComponent', () => {
  let component: LetterProfileComponent;
  let fixture: ComponentFixture<LetterProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
