import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ImagePipe } from './pipes/image.pipe';
import { ModalDulceComponent } from './modal/modal-dulce/modal-dulce.component';
import { ModalSaladoComponent } from './modal/modal-salado/modal-salado.component';




@NgModule({
  declarations: [
    ImagePipe,
    ModalDulceComponent,
    ModalSaladoComponent,
  ],
  exports: [
    ImagePipe,
    ModalDulceComponent,
    ModalSaladoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
