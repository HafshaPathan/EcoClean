import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navigationpage } from './navigationpage';

describe('Navigationpage', () => {
  let component: Navigationpage;
  let fixture: ComponentFixture<Navigationpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navigationpage],
    }).compileComponents();

    fixture = TestBed.createComponent(Navigationpage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
