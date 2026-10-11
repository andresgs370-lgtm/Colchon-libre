import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalleAlojamientoComponent} from "./component/detallealojamientocomponent/detallealojamientocomponent";
import { MisReservasComponent } from './component/misreservascomponent/misreservascomponent';
import { Paginaprincipalcomponent} from "./component/paginaprincipalcomponent/paginaprincipalcomponent";
import { Servicioscomponent } from './component/servicioscomponent/servicioscomponent';


const routes: Routes = [
  { path: '', component: Paginaprincipalcomponent },
  { path: 'alojamiento/:id', component: DetalleAlojamientoComponent },
  { path: 'mis-reservas', component: MisReservasComponent },
  { path: 'servicios', component: Servicioscomponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
