import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbarcomponents } from './component/navbarcomponents/navbarcomponents';
import { FormsModule } from '@angular/forms';
import { Footercomponents } from './component/footercomponents/footercomponents';
import { Paginaprincipalcomponent} from "./component/paginaprincipalcomponent/paginaprincipalcomponent";

@NgModule({
  declarations: [App, Paginaprincipalcomponent, Navbarcomponents, Footercomponents],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
