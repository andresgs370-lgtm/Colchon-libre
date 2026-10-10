import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import { Alojamiento } from '../../models';
import { AlojamientoService } from '../../services/alojamiento.service';
import { FiltroService, FiltrosAlojamiento } from '../../services/filtro.service';

/** Quita tildes, espacios y símbolos para comparar ("Wi-Fi" == "WiFi"). */
const normalizar = (texto: string): string =>
    texto
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]/gi, '')
        .toLowerCase();

@Component({
  selector: 'app-paginaprincipalcomponent',
  standalone: false,
  styleUrl: './paginaprincipalcomponent.css',
  templateUrl: './paginaprincipalcomponent.html',
})
export class Paginaprincipalcomponent {
  private readonly alojamientoService = inject(AlojamientoService);
  private readonly filtroService = inject(FiltroService);
  private readonly router = inject(Router);

  private readonly cargado = signal(false);
  private readonly mostrarTodos = signal(false);

  /** Única lectura del servicio. Si falla, lo deja escrito en la consola. */
  private readonly todos = toSignal(
      this.alojamientoService.getAlojamientos().pipe(
          tap(() => this.cargado.set(true)),
          catchError((error) => {
            console.error('No se pudo cargar assets/data/marketplace-data.json', error);
            this.cargado.set(true);
            return of([] as Alojamiento[]);
          })
      ),
      { initialValue: [] as Alojamiento[] }
  );

  /** Los 3 mejor calificados. */
  private readonly destacados = computed(() =>
      [...this.todos()].sort((a, b) => b.calificacion - a.calificacion).slice(0, 3)
  );

  /** Sin filtros: destacados (o todos si se pulsó "Ver más"). Con filtros: los que coincidan. */
  private readonly tarjetas = computed(() => {
    const filtros = this.filtroService.filtros();
    const lista = this.filtroService.hayFiltros()
        ? this.todos().filter((a) => this.cumple(a, filtros))
        : this.mostrarTodos()
            ? this.todos()
            : this.destacados();

    return lista.map((a) => ({
      id: a.id,
      nombre: a.nombre,
      ciudad: a.ciudad,
      tipoAlojamiento: a.tipo,
      capacidad: `${a.capacidad} ${a.capacidad === 1 ? 'persona' : 'personas'}`,
      precioNoche: `$${a.precioNoche.toLocaleString('es-CO')} COP`,
      calificacion: a.calificacion,
      servicios: a.servicios,
      imagen: a.imagenPrincipal,
    }));
  });

  /** El HTML sigue usando `casas` igual que antes. */
  get casas() {
    return this.tarjetas();
  }

  get hayFiltros(): boolean {
    return this.filtroService.hayFiltros();
  }

  /** Solo se avisa de "sin resultados" cuando ya terminó de cargar. */
  get sinResultados(): boolean {
    return this.cargado() && this.tarjetas().length === 0;
  }

  verTodos(evento: Event): void {
    evento.preventDefault();
    this.mostrarTodos.set(true);
  }

  verDetalle(id: number): void {
    this.router.navigate(['/alojamiento', id]);
  }

  private cumple(a: Alojamiento, f: FiltrosAlojamiento): boolean {
    if (f.nombre.trim() && !normalizar(a.nombre).includes(normalizar(f.nombre))) return false;
    if (f.ciudad.trim() && !normalizar(a.ciudad).includes(normalizar(f.ciudad))) return false;
    if (f.tipo !== 'Todos' && normalizar(a.tipo) !== normalizar(f.tipo)) return false;
    if (a.capacidad < f.capacidad) return false;
    if (f.precioMinimo > 0 && a.precioNoche < f.precioMinimo) return false;
    if (f.precioMaximo > 0 && a.precioNoche > f.precioMaximo) return false;
    if (f.calificacion !== 'Todas' && a.calificacion < Number(f.calificacion)) return false;

    const servicios = a.servicios.map(normalizar);
    return f.servicios.every((s) => servicios.includes(normalizar(s)));
  }
}