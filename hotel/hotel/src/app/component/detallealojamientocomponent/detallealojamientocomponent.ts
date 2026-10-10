import { Component, computed, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap, tap } from 'rxjs';
import { Alojamiento, Cotizacion, Resena } from '../../models';
import { AlojamientoService } from '../../services/alojamiento.service';
import { CotizacionService } from '../../services/cotizacion.service';
import { ReservaComponent } from '../reservacomponent/reservacomponent';

@Component({
  selector: 'app-detalle-alojamiento',
  standalone: true,
  imports: [CurrencyPipe, RouterLink, ReactiveFormsModule, ReservaComponent],
  templateUrl: './detallealojamientocomponent.html',
  styleUrl: './detallealojamientocomponent.css',
})
export class DetalleAlojamientoComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly service = inject(AlojamientoService);
  private readonly cotizacionService = inject(CotizacionService);
  private readonly fb = inject(FormBuilder);

  readonly cargando = signal(true);
  readonly seleccion = signal<string | null>(null);

  readonly hoy = this.cotizacionService.hoy();
  readonly cotizacion = signal<Cotizacion | null>(null);
  readonly erroresCotizacion = signal<string[]>([]);

  readonly formCotizacion = this.fb.nonNullable.group({
    llegada: '',
    salida: '',
    huespedes: 1,
  });

  private readonly id$ = this.route.paramMap.pipe(map((p) => Number(p.get('id'))));

  readonly alojamiento = toSignal(
      this.id$.pipe(
          tap(() => {
            this.cargando.set(true);
            this.seleccion.set(null);
            this.cotizacion.set(null);
            this.erroresCotizacion.set([]);
          }),
          switchMap((id) => this.service.getAlojamientoPorId(id)),
          tap(() => this.cargando.set(false))
      )
  );

  readonly resenas = toSignal(
      this.id$.pipe(switchMap((id) => this.service.getResenas(id))),
      { initialValue: [] as Resena[] }
  );

  readonly imagenes = computed(() => {
    const a = this.alojamiento();
    if (!a) return [];
    return a.imagenes?.length ? a.imagenes : [a.imagenPrincipal];
  });

  readonly imagenActiva = computed(
      () => this.seleccion() ?? this.alojamiento()?.imagenPrincipal ?? ''
  );

  constructor() {
    // Si el usuario cambia algo, la cotización anterior deja de ser válida.
    this.formCotizacion.valueChanges.subscribe(() => {
      this.cotizacion.set(null);
      this.erroresCotizacion.set([]);
    });
  }

  estrellas(n: number): number[] {
    return Array.from({ length: Math.round(n) }, (_, i) => i);
  }

  cotizar(a: Alojamiento): void {
    const { llegada, salida, huespedes } = this.formCotizacion.getRawValue();
    const r = this.cotizacionService.cotizar(a, llegada, salida, Number(huespedes));
    this.erroresCotizacion.set(r.errores);
    this.cotizacion.set(r.cotizacion);
  }
}