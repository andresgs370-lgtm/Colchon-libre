import { Injectable } from '@angular/core';
import { Alojamiento, Cotizacion } from '../models';

export interface ResultadoCotizacion {
    cotizacion: Cotizacion | null;
    errores: string[];
}

@Injectable({ providedIn: 'root' })
export class CotizacionService {
    /** Fecha de hoy (local) en formato yyyy-MM-dd. */
    hoy(): string {
        const d = new Date();
        const mes = String(d.getMonth() + 1).padStart(2, '0');
        const dia = String(d.getDate()).padStart(2, '0');
        return `${d.getFullYear()}-${mes}-${dia}`;
    }

    cotizar(
        a: Alojamiento,
        llegada: string,
        salida: string,
        huespedes: number
    ): ResultadoCotizacion {
        const errores: string[] = [];

        if (!llegada) errores.push('Selecciona la fecha de llegada.');
        if (!salida) errores.push('Selecciona la fecha de salida.');
        if (llegada && llegada < this.hoy()) {
            errores.push('La fecha de llegada no puede ser anterior a hoy.');
        }
        if (llegada && salida && salida <= llegada) {
            errores.push('La fecha de salida debe ser posterior a la de llegada.');
        }
        if (!huespedes || huespedes <= 0) {
            errores.push('El número de huéspedes debe ser mayor que cero.');
        } else if (huespedes > a.capacidad) {
            errores.push(`Este alojamiento admite máximo ${a.capacidad} huésped(es).`);
        }
        if (a.precioNoche <= 0) errores.push('El alojamiento no tiene un precio válido.');

        if (errores.length > 0) return { cotizacion: null, errores };

        const noches = this.noches(llegada, salida);
        const subtotal = noches * a.precioNoche;
        const tarifaLimpieza = a.tarifaLimpieza;
        const tarifaServicio = Math.round(subtotal * 0.1);

        return {
            errores,
            cotizacion: {
                alojamientoId: a.id,
                fechaLlegada: llegada,
                fechaSalida: salida,
                huespedes,
                noches,
                precioNoche: a.precioNoche,
                subtotal,
                tarifaLimpieza,
                tarifaServicio,
                total: subtotal + tarifaLimpieza + tarifaServicio,
            },
        };
    }

    private noches(llegada: string, salida: string): number {
        const [y1, m1, d1] = llegada.split('-').map(Number);
        const [y2, m2, d2] = salida.split('-').map(Number);
        const ms = Date.UTC(y2, m2 - 1, d2) - Date.UTC(y1, m1 - 1, d1);
        return Math.round(ms / 86400000);
    }
}