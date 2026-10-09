export type EstadoReserva = 'CONFIRMADA' | 'CANCELADA';

export interface Reserva {
  id: string;
  alojamientoId: number;
  alojamientoNombre: string;
  ciudad: string;
  imagen: string;
  fechaLlegada: string;
  fechaSalida: string;
  huespedes: number;
  noches: number;
  total: number;
  nombreHuesped: string;
  correo: string;
  estado: EstadoReserva;
}

/** Datos que captura el formulario de reserva. */
export interface DatosHuesped {
  nombre: string;
  correo: string;
}
