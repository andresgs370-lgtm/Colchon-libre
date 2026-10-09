import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ReservaComponent } from './reservacomponent';
import { Alojamiento, Cotizacion } from '../../models';

describe('ReservaComponent', () => {
    let component: ReservaComponent;
    let fixture: ComponentFixture<ReservaComponent>;

    const alojamiento: Alojamiento = {
        id: 1, nombre: 'Loft moderno en Chapinero', descripcion: 'Loft de prueba',
        ciudad: 'Bogotá', ubicacion: 'Chapinero, Bogotá', tipo: 'Apartamento',
        capacidad: 2, habitaciones: 1, camas: 1, banos: 1,
        precioNoche: 180000, tarifaLimpieza: 45000, calificacion: 4.8, activo: true,
        imagenPrincipal: 'assets/images/loft-bogota.jpg', imagenes: [],
        servicios: ['Wi-Fi'], reglas: ['No fumar'],
    };

    const cotizacion: Cotizacion = {
        alojamientoId: 1, fechaLlegada: '2026-12-01', fechaSalida: '2026-12-03',
        huespedes: 2, noches: 2, precioNoche: 180000,
        subtotal: 360000, tarifaLimpieza: 45000, tarifaServicio: 36000, total: 441000,
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ReservaComponent],
            providers: [provideRouter([])],
        }).compileComponents();

        fixture = TestBed.createComponent(ReservaComponent);
        fixture.componentRef.setInput('alojamiento', alojamiento);
        fixture.componentRef.setInput('cotizacion', cotizacion);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('no debe permitir reservar con el formulario vacío', async () => {
        component.confirmar();
        expect(component.form.invalid).toBe(true);
        expect(component.reservaCreada()).toBeNull();
    });
});