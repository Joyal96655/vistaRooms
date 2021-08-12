import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedHlidayHomesComponent } from './featured-hliday-homes.component';

describe('FeaturedHlidayHomesComponent', () => {
  let component: FeaturedHlidayHomesComponent;
  let fixture: ComponentFixture<FeaturedHlidayHomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedHlidayHomesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedHlidayHomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
