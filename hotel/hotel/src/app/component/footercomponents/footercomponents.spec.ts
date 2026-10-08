import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Footercomponents } from './footercomponents';

describe('Footercomponents', () => {
  let component: Footercomponents;
  let fixture: ComponentFixture<Footercomponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Footercomponents],
    }).compileComponents();

    fixture = TestBed.createComponent(Footercomponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
