//* Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PaginasModule } from './components/paginas.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//*Rutas
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';

import { DulceComponent } from './components/dulce/dulce.component';
import { PasteleriaComponent } from './components/dulce/pasteleria/pasteleria.component';
import { PostreComponent } from './components/dulce/postre/postre.component';
import { TortaComponent } from './components/dulce/torta/torta.component';
import { AuthModule } from './auth/auth.module';

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
    AuthModule,
    HttpClientModule
  ],
  providers: [DulceComponent, PasteleriaComponent, PostreComponent, TortaComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
