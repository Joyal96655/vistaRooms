import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenTrustedComponent } from './chosen-trusted.component';

describe('ChosenTrustedComponent', () => {
  let component: ChosenTrustedComponent;
  let fixture: ComponentFixture<ChosenTrustedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChosenTrustedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChosenTrustedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
