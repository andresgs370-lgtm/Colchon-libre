import { Component} from '@angular/core';
@Component({
  selector: 'app-paginaprincipalcomponent',
  standalone: false,
  styleUrl: './paginaprincipalcomponent.css',
  templateUrl: './paginaprincipalcomponent.html',
})
export class Paginaprincipalcomponent {
  casas: any[] = [
    {
      nombre: 'Casa Campestre San José',
      ciudad: 'Medellín',
      tipoAlojamiento: 'Casa Campestre',
      capacidad: '8 personas',
      precioNoche: '$350.000 COP',
      calificacion: 4.9,
      servicios: ['Piscina', 'WiFi', 'Parqueadero', 'Zona BBQ'],
      imagen: 'assets/a.avif'
    },
    {
      nombre: 'Apartamento Moderno Centro',
      ciudad: 'Bogotá',
      tipoAlojamiento: 'Apartamento',
      capacidad: '4 personas',
      precioNoche: '$180.000 COP',
      calificacion: 4.7,
      servicios: ['WiFi', 'Ascensor', 'Cocina equipada'],
      imagen: 'assets/b.avif'
    },
    {
      nombre: 'Cabaña Alpina',
      ciudad: 'Manizales',
      tipoAlojamiento: 'Cabaña',
      capacidad: '6 personas',
      precioNoche: '$220.000 COP',
      calificacion: 4.8,
      servicios: ['Chimenea', 'Vista a la montaña', 'WiFi'],
      imagen: 'assets/c.jpg'
    },
    {
      nombre: 'Villa Mar y Sol',
      ciudad: 'Santa Marta',
      tipoAlojamiento: 'Villa',
      capacidad: '10 personas',
      precioNoche: '$500.000 COP',
      calificacion: 5.0,
      servicios: ['Acceso a la playa', 'Piscina', 'Aire acondicionado'],
      imagen: 'assets/1.png'
    },
    {
      nombre: 'Loft Del Valle',
      ciudad: 'Cali',
      tipoAlojamiento: 'Loft',
      capacidad: '2 personas',
      precioNoche: '$140.000 COP',
      calificacion: 4.6,
      servicios: ['Jacuzzi', 'WiFi', 'Gimnasio'],
      imagen: 'assets/2.jpg'
    },
    {
      nombre: 'Finca El Cafetal',
      ciudad: 'Armenia',
      tipoAlojamiento: 'Finca',
      capacidad: '12 personas',
      precioNoche: '$450.000 COP',
      calificacion: 4.9,
      servicios: ['Piscina', 'Cancha de fútbol', 'Kiosko'],
      imagen: 'assets/3.jpg'
    },

  ];
}


