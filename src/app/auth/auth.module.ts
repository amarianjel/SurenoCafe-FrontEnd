import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    LoginComponent,
    AdminComponent,
  ],
  exports: [
    LoginComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
