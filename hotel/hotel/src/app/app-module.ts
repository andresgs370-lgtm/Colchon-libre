import { NgModule, provideBrowserGlobalErrorListeners } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { provideHttpClient } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing-module";
import { App } from "./app";
import { Navbarcomponents } from "./component/navbarcomponents/navbarcomponents";
import { FormsModule } from "@angular/forms";
import { Footercomponents } from "./component/footercomponents/footercomponents";
import { Paginaprincipalcomponent } from "./component/paginaprincipalcomponent/paginaprincipalcomponent";
import { ReservaComponent } from "./component/reservacomponent/reservacomponent";
import { MisReservasComponent } from "./component/misreservascomponent/misreservascomponent";
import { Servicioscomponent } from "./component/servicioscomponent/servicioscomponent";

@NgModule({
  declarations: [
    App,
    Paginaprincipalcomponent,
    Navbarcomponents,
    Footercomponents,
    Servicioscomponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReservaComponent,
    MisReservasComponent,
  ],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
