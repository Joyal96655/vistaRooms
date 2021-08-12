import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyChoseVistaComponent } from './why-chose-vista.component';

describe('WhyChoseVistaComponent', () => {
  let component: WhyChoseVistaComponent;
  let fixture: ComponentFixture<WhyChoseVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyChoseVistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyChoseVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
