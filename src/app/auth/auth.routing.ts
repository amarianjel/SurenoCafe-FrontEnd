import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { AuthComponent } from './auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SaladoCrudComponent } from './salado-crud/salado-crud.component';
import { DulceCrudComponent } from './dulce-crud/dulce-crud.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AgendaAdminComponent } from './agenda-admin/agenda-admin.component';
import { EditarCuentaComponent } from './editar-cuenta/editar-cuenta.component';
import { AgendaUsuarioComponent } from './agenda-usuario/agenda-usuario.component';
import { LoginGuardGuard } from '../components/shared/guards/login-guard.guard';
import { RolGuardGuard } from '../components/shared/guards/rol-guard.guard';


const routes: Routes = [
    {
        path: 'auth', component: AuthComponent,
        
        children: [
            // { path: 'login', component: LoginComponent },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'registro', component: RegistrarseComponent },
            {
                path: 'dashboard', component: DashboardComponent,
                canActivate:[LoginGuardGuard, RolGuardGuard],
                children: [
                    { path: '', redirectTo: 'agenda', pathMatch: 'full' },
                    { path: 'dulce', component: DulceCrudComponent },
                    { path: 'salado', component: SaladoCrudComponent },
                    { path: 'agenda', component: AgendaAdminComponent },
                ]
            },

                { path: 'perfil', component: PerfilComponent,
                canActivate:[LoginGuardGuard],
                children: [
                    { path: '', redirectTo: 'editar', pathMatch: 'full' },
                    { path: 'editar', component: EditarCuentaComponent },
                    { path: 'pedidos', component: AgendaUsuarioComponent },
                ]
            },
            // { path: '', pathMatch: 'full', redirectTo: 'login' },
        ]
    }

    /*{ path: 'login', component: LoginComponent },
    { path: 'registrarse', component: RegistrarseComponent },*/
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }