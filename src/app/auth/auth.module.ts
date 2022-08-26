import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../components/shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule } from '@angular/material/button';
import {MatSortModule} from '@angular/material/sort';
import {MatTooltipModule} from '@angular/material/tooltip';
import { SaladoCrudComponent } from './salado-crud/salado-crud.component';
import { DulceCrudComponent } from './dulce-crud/dulce-crud.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AgendaAdminComponent } from './agenda-admin/agenda-admin.component';
import { AgendaUsuarioComponent } from './agenda-usuario/agenda-usuario.component';
import { EditarCuentaComponent } from './editar-cuenta/editar-cuenta.component';




@NgModule({
  declarations: [
    LoginComponent,
    RegistrarseComponent,
    AuthComponent,
    DashboardComponent,
    SidebarComponent,
    SaladoCrudComponent,
    DulceCrudComponent,
    PerfilComponent,
    AgendaAdminComponent,
    AgendaUsuarioComponent,
    EditarCuentaComponent
  ],
  exports: [
    LoginComponent,
    RegistrarseComponent,
    DashboardComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatSortModule,
    MatTooltipModule
  ]
})
export class AuthModule { }
