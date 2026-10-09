import { Component, inject, input, output, signal } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Alojamiento, Cotizacion, Reserva } from '../../models';
import { ReservaService } from '../../services/reserva.service';

@Component({
    selector: 'app-reserva',
    standalone: true,
    imports: [ReactiveFormsModule, CurrencyPipe, DatePipe, RouterLink],
    templateUrl: './reservacomponent.html',
    styleUrl: './reservacomponent.css',
})
export class ReservaComponent {
    private readonly fb = inject(FormBuilder);
    private readonly reservaService = inject(ReservaService);

    alojamiento = input.required<Alojamiento>();
    cotizacion = input.required<Cotizacion>();
    reservado = output<Reserva>();

    readonly reservaCreada = signal<Reserva | null>(null);
    readonly error = signal<string | null>(null);

    readonly form = this.fb.nonNullable.group({
        nombre: ['', [Validators.required, Validators.minLength(3)]],
        correo: ['', [Validators.required, Validators.email]],
    });

    get nombre() { return this.form.controls.nombre; }
    get correo() { return this.form.controls.correo; }

    confirmar(): void {
        this.error.set(null);
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        try {
            const reserva = this.reservaService.crear(
                this.alojamiento(),
                this.cotizacion(),
                this.form.getRawValue()
            );
            this.reservaCreada.set(reserva);
            this.reservado.emit(reserva);
            this.form.reset();
        } catch (e) {
            this.error.set(e instanceof Error ? e.message : 'No fue posible registrar la reserva.');
        }
    }
}