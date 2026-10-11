import { Component, OnInit } from '@angular/core';
import { Alojamiento } from '../../models/alojamiento.model';
import { AlojamientoService } from '../../services/alojamiento.service';
import { FiltroService } from '../../services/filtro.service';

@Component({
    selector: 'app-listadoalojamientoscomponent',
    standalone: false,
    templateUrl: './listadoalojamientoscomponent.html',
    styleUrl: './listadoalojamientoscomponent.css'
})
export class Listadoalojamientoscomponent implements OnInit {

    alojamientos: Alojamiento[] = [];

    cargando = true;
    error = false;

    nombre = '';
    ciudad = '';
    tipoAlojamiento = 'Todos';
    capacidad = 1;
    precioMinimo = 0;
    precioMaximo = 0;

    wifi = false;
    piscina = false;
    parqueadero = false;
    cocina = false;
    television = false;
    lavadora = false;
    desayuno = false;
    gimnasio = false;

    constructor(
        private alojamientoService: AlojamientoService,
        public filtroService: FiltroService
    ) {}

    ngOnInit(): void {
        this.alojamientoService.getAlojamientos().subscribe({
            next: (datos) => {
                this.alojamientos = datos;
                this.cargando = false;
            },
            error: (error) => {
                console.error('Error al cargar los alojamientos:', error);
                this.error = true;
                this.cargando = false;
            }
        });
    }

    get alojamientosFiltrados(): Alojamiento[] {
        const filtros = this.filtroService.filtros();

        return this.alojamientos.filter((alojamiento) => {
            const coincideNombre = alojamiento.nombre
                .toLowerCase()
                .includes(filtros.nombre.trim().toLowerCase());

            const coincideCiudad = alojamiento.ciudad
                .toLowerCase()
                .includes(filtros.ciudad.trim().toLowerCase());

            const coincideTipo =
                filtros.tipo === 'Todos' ||
                alojamiento.tipo === filtros.tipo;

            const coincideCapacidad =
                alojamiento.capacidad >= filtros.capacidad;

            const coincidePrecioMinimo =
                filtros.precioMinimo <= 0 ||
                alojamiento.precioNoche >= filtros.precioMinimo;

            const coincidePrecioMaximo =
                filtros.precioMaximo <= 0 ||
                alojamiento.precioNoche <= filtros.precioMaximo;

            const coincideCalificacion =
                filtros.calificacion === 'Todas' ||
                alojamiento.calificacion >= Number(filtros.calificacion);

            const serviciosAlojamiento = alojamiento.servicios.map(
                servicio => servicio.toLowerCase().replace(/-/g, '').replace(/\s/g, '')
            );

            const coincideServicios = filtros.servicios.every(servicio => {
                const buscado = servicio.toLowerCase().replace(/-/g, '').replace(/\s/g, '');
                return serviciosAlojamiento.includes(buscado);
            });

            return coincideNombre &&
                coincideCiudad &&
                coincideTipo &&
                coincideCapacidad &&
                coincidePrecioMinimo &&
                coincidePrecioMaximo &&
                coincideCalificacion &&
                coincideServicios;
        });
    }

    aplicarFiltros(): void {
        const servicios: string[] = [];

        if (this.wifi) servicios.push('Wi-Fi');
        if (this.piscina) servicios.push('Piscina');
        if (this.parqueadero) servicios.push('Parqueadero');
        if (this.cocina) servicios.push('Cocina');
        if (this.television) servicios.push('Televisión');
        if (this.lavadora) servicios.push('Lavadora');
        if (this.desayuno) servicios.push('Desayuno');
        if (this.gimnasio) servicios.push('Gimnasio');

        this.filtroService.aplicar({
            nombre: this.nombre,
            ciudad: this.ciudad,
            tipo: this.tipoAlojamiento,
            capacidad: Number(this.capacidad) || 1,
            precioMinimo: Number(this.precioMinimo) || 0,
            precioMaximo: Number(this.precioMaximo) || 0,
            calificacion: 'Todas',
            servicios
        });
    }

    limpiarFiltros(): void {
        this.nombre = '';
        this.ciudad = '';
        this.tipoAlojamiento = 'Todos';
        this.capacidad = 1;
        this.precioMinimo = 0;
        this.precioMaximo = 0;

        this.wifi = false;
        this.piscina = false;
        this.parqueadero = false;
        this.cocina = false;
        this.television = false;
        this.lavadora = false;
        this.desayuno = false;
        this.gimnasio = false;

        this.filtroService.limpiar();
    }

    formatearPrecio(precio: number): string {
        return precio.toLocaleString('es-CO', {
            style: 'currency',
            currency: 'COP',
            maximumFractionDigits: 0
        });
    }
}