import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxaryVillasComponent } from './luxary-villas.component';

describe('LuxaryVillasComponent', () => {
  let component: LuxaryVillasComponent;
  let fixture: ComponentFixture<LuxaryVillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuxaryVillasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuxaryVillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
