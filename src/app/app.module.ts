//* Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PaginasModule } from './components/paginas.module';
import { AppRoutingModule } from './app-routing.module';

//*Rutas
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';

import { DulceComponent } from './components/dulce/dulce.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    PaginasModule,
    AppRoutingModule,
  ],
  providers: [DulceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
