import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreDestinationComponent } from './explore-destination.component';

describe('ExploreDestinationComponent', () => {
  let component: ExploreDestinationComponent;
  let fixture: ComponentFixture<ExploreDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreDestinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
