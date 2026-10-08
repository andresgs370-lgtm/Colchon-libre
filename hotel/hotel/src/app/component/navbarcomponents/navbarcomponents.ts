import { Component } from '@angular/core';

@Component({
  selector: 'app-navbarcomponents',
  standalone: false,
  styleUrl: './navbarcomponents.css',
  templateUrl: './navbarcomponents.html',
})
export class Navbarcomponents {

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

  }

}
