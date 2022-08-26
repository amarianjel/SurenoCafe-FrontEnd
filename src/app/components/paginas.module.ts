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

import { HomeComponent } from './home/home.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';

import { PasteleriaComponent } from './dulce/pasteleria/pasteleria.component';
import { PostreComponent } from './dulce/postre/postre.component';
import { TortaComponent } from './dulce/torta/torta.component';

import { ProductoSaladoComponent } from './salado/producto-salado/producto-salado.component';
import { ProductoDulceComponent } from './dulce/producto-dulce/producto-dulce.component';
import { AgendaComponent } from './agenda/agenda.component';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    HomeComponent,
    DulceComponent,
    SaladoComponent,
    PedidosComponent,
    LocalizacionComponent,
    PagenofoundComponent,

    PasteleriaComponent,
    PostreComponent,
    TortaComponent,
    ProductoSaladoComponent,
    ProductoDulceComponent,
    AgendaComponent,
  ],
  exports: [
    HomeComponent,
    DulceComponent,
    SaladoComponent,  
    PedidosComponent,
    LocalizacionComponent,
    PagenofoundComponent,
    PasteleriaComponent,
    PostreComponent,
    TortaComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers:[
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ]
})
export class PaginasModule { }