import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Collector } from './collector';

describe('Collector', () => {
  let component: Collector;
  let fixture: ComponentFixture<Collector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Collector],
    }).compileComponents();

    fixture = TestBed.createComponent(Collector);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
