import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';

import { DulceComponent } from './dulce/dulce.component';
import { SaladoComponent } from './salado/salado.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { LocalizacionComponent } from './localizacion/localizacion.component';
import { CarnesComponent } from './salado/carnes/carnes.component';
import { AcompanhamientosComponent } from './salado/acompanhamientos/acompanhamientos.component';
import { GuisosComponent } from './salado/guisos/guisos.component';
import { LasanhasComponent } from './salado/lasanhas/lasanhas.component';
import { PollosRellenosComponent } from './salado/pollos-rellenos/pollos-rellenos.component';
import { QuinchesComponent } from './salado/quinches/quinches.component';
import { HomeComponent } from './home/home.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';



@NgModule({
  declarations: [
    HomeComponent,
    DulceComponent,
    SaladoComponent,
    CarnesComponent,
    AcompanhamientosComponent,
    GuisosComponent,
    LasanhasComponent,
    PollosRellenosComponent,
    QuinchesComponent,
    PedidosComponent,
    LocalizacionComponent,
    PagenofoundComponent,
  ],
  exports: [
    HomeComponent,
    DulceComponent,
    SaladoComponent,
    CarnesComponent,
    AcompanhamientosComponent,
    GuisosComponent,
    LasanhasComponent,
    PollosRellenosComponent,
    QuinchesComponent,  
    PedidosComponent,
    LocalizacionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class PaginasModule { }