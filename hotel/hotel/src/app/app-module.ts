
import { NgModule, provideBrowserGlobalErrorListeners } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { provideHttpClient } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing-module";
import { App } from "./app";
import { Navbarcomponents } from "./component/navbarcomponents/navbarcomponents";
import { Footercomponents } from "./component/footercomponents/footercomponents";
import { Paginaprincipalcomponent } from "./component/paginaprincipalcomponent/paginaprincipalcomponent";
import { ReservaComponent } from "./component/reservacomponent/reservacomponent";
import { MisReservasComponent } from "./component/misreservascomponent/misreservascomponent";
import { Listadoalojamientoscomponent } from "./component/listadoalojamientoscomponent/listadoalojamientoscomponent";
import { Servicioscomponent } from "./component/servicioscomponent/servicioscomponent";

@NgModule({
  declarations: [
    App,
    Paginaprincipalcomponent,
    Navbarcomponents,
    Footercomponents,
    Listadoalojamientoscomponent,
    Servicioscomponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReservaComponent,
    MisReservasComponent,
  ],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}

