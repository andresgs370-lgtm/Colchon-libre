import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalleAlojamientoComponent } from './component/detallealojamientocomponent/detallealojamientocomponent';
import { MisReservasComponent } from './component/misreservascomponent/misreservascomponent';
import { Paginaprincipalcomponent } from './component/paginaprincipalcomponent/paginaprincipalcomponent';
import { Listadoalojamientoscomponent } from './component/listadoalojamientoscomponent/listadoalojamientoscomponent';
const routes: Routes = [
    { path: '', component: Paginaprincipalcomponent },
    { path: 'alojamientos', component: Listadoalojamientoscomponent },
    { path: 'alojamiento/:id', component: DetalleAlojamientoComponent },
    { path: 'mis-reservas', component: MisReservasComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }