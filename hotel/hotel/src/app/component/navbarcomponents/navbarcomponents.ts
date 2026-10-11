import { Component, inject } from '@angular/core';
import { FiltroService } from '../../services/filtro.service';

@Component({
  selector: 'app-navbarcomponents',
  standalone: false,
  styleUrl: './navbarcomponents.css',
  templateUrl: './navbarcomponents.html',
})
export class Navbarcomponents {

  private readonly filtroService = inject(FiltroService);

  mostrarFiltros: boolean = false;


  nombre: string = '';

  ciudad: string = '';

  tipoAlojamiento: string = 'Todos';

  capacidad: number = 1;

  precioMinimo: number = 0;

  precioMaximo: number = 0;

  calificacion: string = 'Todas';


  wifi: boolean = false;

  piscina: boolean = false;

  parqueadero: boolean = false;

  desayuno: boolean = false;

  gimnasio: boolean = false;


  toggleFiltros(): void {

    this.mostrarFiltros =
        !this.mostrarFiltros;

  }


  aplicarFiltros(): void {

    console.log('Filtros aplicados');

    console.log('Nombre:', this.nombre);

    console.log('Ciudad:', this.ciudad);

    console.log(
        'Tipo:',
        this.tipoAlojamiento
    );

    console.log(
        'Capacidad:',
        this.capacidad
    );

    console.log(
        'Precio mínimo:',
        this.precioMinimo
    );

    console.log(
        'Precio máximo:',
        this.precioMaximo
    );

    console.log(
        'Calificación:',
        this.calificacion
    );

    console.log('WiFi:', this.wifi);

    console.log(
        'Piscina:',
        this.piscina
    );

    console.log(
        'Parqueadero:',
        this.parqueadero
    );

    console.log(
        'Desayuno:',
        this.desayuno
    );

    console.log(
        'Gimnasio:',
        this.gimnasio
    );

    this.filtroService.aplicar({
      nombre: this.nombre,
      ciudad: this.ciudad,
      tipo: this.tipoAlojamiento,
      capacidad: Number(this.capacidad) || 1,
      precioMinimo: Number(this.precioMinimo) || 0,
      precioMaximo: Number(this.precioMaximo) || 0,
      calificacion: this.calificacion,
      servicios: [
        this.wifi ? 'WiFi' : '',
        this.piscina ? 'Piscina' : '',
        this.parqueadero ? 'Parqueadero' : '',
        this.desayuno ? 'Desayuno' : '',
        this.gimnasio ? 'Gimnasio' : '',
      ].filter(Boolean),
    });

    this.mostrarFiltros = false;

  }


  limpiarFiltros(): void {

    this.nombre = '';

    this.ciudad = '';

    this.tipoAlojamiento = 'Todos';

    this.capacidad = 1;

    this.precioMinimo = 0;

    this.precioMaximo = 0;

    this.calificacion = 'Todas';

    this.wifi = false;

    this.piscina = false;

    this.parqueadero = false;

    this.desayuno = false;

    this.gimnasio = false;

    this.filtroService.limpiar();

  }

}
