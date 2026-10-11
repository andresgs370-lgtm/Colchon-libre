
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalleAlojamientoComponent } from './component/detallealojamientocomponent/detallealojamientocomponent';
import { MisReservasComponent } from './component/misreservascomponent/misreservascomponent';
import { Paginaprincipalcomponent } from './component/paginaprincipalcomponent/paginaprincipalcomponent';
import { Listadoalojamientoscomponent } from './component/listadoalojamientoscomponent/listadoalojamientoscomponent';
import { Servicioscomponent } from './component/servicioscomponent/servicioscomponent';
import { Contactocomponent} from "./component/contactocomponent/contactocomponent";

const routes: Routes = [
  { path: '', component: Paginaprincipalcomponent },
  { path: 'alojamientos', component: Listadoalojamientoscomponent },
  { path: 'alojamientos/:id', component: DetalleAlojamientoComponent },
  { path: 'mis-reservas', component: MisReservasComponent },
  { path: 'servicios', component: Servicioscomponent },
  { path: 'contacto', component: Contactocomponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
