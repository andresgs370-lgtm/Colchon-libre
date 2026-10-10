import { Injectable, computed, signal } from '@angular/core';

export interface FiltrosAlojamiento {
    nombre: string;
    ciudad: string;
    tipo: string;
    capacidad: number;
    precioMinimo: number;
    precioMaximo: number;
    calificacion: string;
    servicios: string[];
}

const FILTROS_VACIOS: FiltrosAlojamiento = {
    nombre: '',
    ciudad: '',
    tipo: 'Todos',
    capacidad: 1,
    precioMinimo: 0,
    precioMaximo: 0,
    calificacion: 'Todas',
    servicios: [],
};

@Injectable({ providedIn: 'root' })
export class FiltroService {
    private readonly _filtros = signal<FiltrosAlojamiento>({ ...FILTROS_VACIOS, servicios: [] });

    readonly filtros = this._filtros.asReadonly();

    readonly hayFiltros = computed(() => {
        const f = this._filtros();
        return (
            !!f.nombre.trim() ||
            !!f.ciudad.trim() ||
            f.tipo !== 'Todos' ||
            f.capacidad > 1 ||
            f.precioMinimo > 0 ||
            f.precioMaximo > 0 ||
            f.calificacion !== 'Todas' ||
            f.servicios.length > 0
        );
    });

    aplicar(filtros: FiltrosAlojamiento): void {
        this._filtros.set({ ...filtros, servicios: [...filtros.servicios] });
    }

    limpiar(): void {
        this._filtros.set({ ...FILTROS_VACIOS, servicios: [] });
    }
}