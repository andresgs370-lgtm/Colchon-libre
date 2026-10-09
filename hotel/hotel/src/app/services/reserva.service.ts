import { Injectable, computed, signal } from '@angular/core';
import { Alojamiento, Cotizacion, DatosHuesped, Reserva } from '../models';

const STORAGE_KEY = 'colchon-libre.reservas';

@Injectable({ providedIn: 'root' })
export class ReservaService {
  private readonly _reservas = signal<Reserva[]>(this.cargar());

  readonly reservas = this._reservas.asReadonly();
  readonly cantidad = computed(() => this._reservas().length);

  /**
   * Crea una reserva CONFIRMADA. Exige una cotización válida:
   * una reserva solo puede hacerse después de cotizar.
   */
  crear(alojamiento: Alojamiento, cotizacion: Cotizacion, huesped: DatosHuesped): Reserva {
    if (!this.cotizacionValida(alojamiento, cotizacion)) {
      throw new Error('No se puede reservar sin una cotización válida.');
    }

    const reserva: Reserva = {
      id: this.generarId(),
      alojamientoId: alojamiento.id,
      alojamientoNombre: alojamiento.nombre,
      ciudad: alojamiento.ciudad,
      imagen: alojamiento.imagenPrincipal,
      fechaLlegada: cotizacion.fechaLlegada,
      fechaSalida: cotizacion.fechaSalida,
      huespedes: cotizacion.huespedes,
      noches: cotizacion.noches,
      total: cotizacion.total,
      nombreHuesped: huesped.nombre.trim(),
      correo: huesped.correo.trim().toLowerCase(),
      estado: 'CONFIRMADA',
    };

    this._reservas.update((lista) => [reserva, ...lista]);
    this.guardar();
    return reserva;
  }

  obtenerPorId(id: string): Reserva | undefined {
    return this._reservas().find((r) => r.id === id);
  }

  private cotizacionValida(a: Alojamiento, c: Cotizacion): boolean {
    return (
      !!c &&
      c.alojamientoId === a.id &&
      c.noches > 0 &&
      c.huespedes > 0 &&
      c.huespedes <= a.capacidad &&
      c.total > 0
    );
  }

  private generarId(): string {
    return `RES-${Date.now().toString(36).toUpperCase()}${Math.floor(Math.random() * 100)}`;
  }

  // --- Persistencia (localStorage, tolerante a SSR / errores) ---
  private cargar(): Reserva[] {
    try {
      if (typeof localStorage === 'undefined') return [];
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as Reserva[]) : [];
    } catch {
      return [];
    }
  }

  private guardar(): void {
    try {
      if (typeof localStorage === 'undefined') return;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this._reservas()));
    } catch {
      /* si falla el almacenamiento, la reserva sigue en memoria */
    }
  }
}
