import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//* Componentes
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class AuthRoutingModule {}