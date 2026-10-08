import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Navbarcomponents } from './navbarcomponents';

describe('Navbarcomponents', () => {
  let component: Navbarcomponents;
  let fixture: ComponentFixture<Navbarcomponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Navbarcomponents],
    }).compileComponents();

    fixture = TestBed.createComponent(Navbarcomponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
