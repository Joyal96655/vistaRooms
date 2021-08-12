import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatMindsComponent } from './great-minds.component';

describe('GreatMindsComponent', () => {
  let component: GreatMindsComponent;
  let fixture: ComponentFixture<GreatMindsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreatMindsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreatMindsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
