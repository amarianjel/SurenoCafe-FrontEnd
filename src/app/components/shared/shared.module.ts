import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ImagePipe } from './pipes/image.pipe';
import { ModalDulceComponent } from './modal/modal-dulce/modal-dulce.component';
import { ModalSaladoComponent } from './modal/modal-salado/modal-salado.component';
import { ModalCrudAddComponent } from './modal/modal-crud-add/modal-crud-add.component';
import { MatButtonModule } from '@angular/material/button';
import { ModalCrudDeleteComponent } from './modal/modal-crud-delete/modal-crud-delete.component';
import { ModalCrudEditComponent } from './modal/modal-crud-edit/modal-crud-edit.component'
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ImagePipe,
    ModalDulceComponent,
    ModalSaladoComponent,
    ModalCrudAddComponent,
    ModalCrudDeleteComponent,
    ModalCrudEditComponent,
  ],
  exports: [
    ImagePipe,
    ModalDulceComponent,
    ModalSaladoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
