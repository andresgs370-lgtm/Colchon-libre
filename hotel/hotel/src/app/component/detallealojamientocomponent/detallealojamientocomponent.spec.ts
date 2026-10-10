import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { DetalleAlojamientoComponent } from './detallealojamientocomponent';

describe('DetalleAlojamientoComponent', () => {
  let component: DetalleAlojamientoComponent;
  let fixture: ComponentFixture<DetalleAlojamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleAlojamientoComponent],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleAlojamientoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});