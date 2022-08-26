import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarseComponent } from '../registrarse/registrarse.component';

//* Componentes
import { DulceComponent } from './dulce/dulce.component';
import { PasteleriaComponent } from './dulce/pasteleria/pasteleria.component';
import { PostreComponent } from './dulce/postre/postre.component';
import { TortaComponent } from './dulce/torta/torta.component';
import { LocalizacionComponent } from './localizacion/localizacion.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { SaladoComponent } from './salado/salado.component';
import { ProductoSaladoComponent } from './salado/producto-salado/producto-salado.component';
import { ProductoDulceComponent } from './dulce/producto-dulce/producto-dulce.component';
import { AgendaComponent } from './agenda/agenda.component';
import { LoginGuardGuard } from './shared/guards/login-guard.guard';


const routes: Routes = [
    { path: 'dulce', component: DulceComponent },
    // { path: 'pasteleria', component: PasteleriaComponent },
    // { path: 'postre', component: PostreComponent },
    // { path: 'torta', component: TortaComponent },

    { path: 'dulce/:id', component: ProductoDulceComponent },

    { path: 'salado', component: SaladoComponent }, //! aQUI FALTA CONVERTIR EN HIJA
    { path: 'salado/:id', component: ProductoSaladoComponent },
    { path: 'pedidos', component: PedidosComponent},
    { path: 'localizacion', component: LocalizacionComponent},
    // { path: 'registro', component: RegistrarseComponent}
    {path:'agendar', component: AgendaComponent, canActivate:[LoginGuardGuard],}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaginasRoutingModule {}