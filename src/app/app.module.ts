//* Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from './auth/auth.module';
import { PaginasModule } from './components/paginas.module';
import { AppRoutingModule } from './app-routing.module';

//*Rutas
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';

import { DulceComponent } from './components/dulce/dulce.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PasteleriaComponent } from './components/dulce/pasteleria/pasteleria.component';
import { PostreComponent } from './components/dulce/postre/postre.component';
import { TortaComponent } from './components/dulce/torta/torta.component';
import { SaladoComponent } from './components/salado/salado.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegistrarseComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    PaginasModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatTooltipModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule
  ],

  providers: [DulceComponent, PasteleriaComponent, PostreComponent, TortaComponent, SaladoComponent],


  bootstrap: [AppComponent]
})
export class AppModule { }
