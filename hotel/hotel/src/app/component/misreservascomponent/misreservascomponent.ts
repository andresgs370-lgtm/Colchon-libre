import { Component, inject } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReservaService } from '../../services/reserva.service';

@Component({
  selector: 'app-mis-reservas',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, RouterLink],
  templateUrl: './misreservascomponent.html',
  styleUrl: './misreservascomponent.css'
})
export class MisReservasComponent {
  readonly reservas = inject(ReservaService).reservas;
}