import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//* Componentes
import { DulceComponent } from './dulce/dulce.component';
import { LocalizacionComponent } from './localizacion/localizacion.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { AcompanhamientosComponent } from './salado/acompanhamientos/acompanhamientos.component';
import { CarnesComponent } from './salado/carnes/carnes.component';
import { GuisosComponent } from './salado/guisos/guisos.component';
import { LasanhasComponent } from './salado/lasanhas/lasanhas.component';
import { PollosRellenosComponent } from './salado/pollos-rellenos/pollos-rellenos.component';
import { QuinchesComponent } from './salado/quinches/quinches.component';
import { SaladoComponent } from './salado/salado.component';



const routes: Routes = [

    { path: 'dulce', component: DulceComponent },

    { path: 'salado', component: SaladoComponent }, //! aQUI FALTA CONVERTIR EN HIJA

    { path: 'carne', component: CarnesComponent },
    { path: 'acompanhamiento', component: AcompanhamientosComponent },
    { path: 'guiso', component: GuisosComponent},
    { path: 'lasanha', component: LasanhasComponent},
    { path: 'pollo_relleno', component: PollosRellenosComponent},
    { path: 'quinche', component: QuinchesComponent},
    { path: 'pedidos', component: PedidosComponent},
    { path: 'localizacion', component: LocalizacionComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaginasRoutingModule {}