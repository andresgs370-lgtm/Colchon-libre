import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, shareReplay } from 'rxjs';
import { Alojamiento, MarketplaceData, Resena } from '../models';

@Injectable({ providedIn: 'root' })
export class AlojamientoService {
  private readonly http = inject(HttpClient);
  private readonly url = 'assets/data/marketplace-data.json';

  private readonly datos$: Observable<MarketplaceData> = this.http
    .get<MarketplaceData>(this.url)
    .pipe(shareReplay(1));

  getAlojamientos(): Observable<Alojamiento[]> {
    return this.datos$.pipe(
      map((d) => d.alojamientos.filter((a) => a.activo && a.precioNoche > 0))
    );
  }

  getDestacados(cantidad = 3): Observable<Alojamiento[]> {
    return this.getAlojamientos().pipe(
      map((lista) =>
        [...lista].sort((a, b) => b.calificacion - a.calificacion).slice(0, cantidad)
      )
    );
  }

  getAlojamientoPorId(id: number): Observable<Alojamiento | undefined> {
    return this.getAlojamientos().pipe(map((lista) => lista.find((a) => a.id === id)));
  }

  getResenas(alojamientoId: number): Observable<Resena[]> {
    return this.datos$.pipe(
      map((d) => d.resenas.filter((r) => r.alojamientoId === alojamientoId))
    );
  }
}
