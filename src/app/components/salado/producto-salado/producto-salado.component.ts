import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISalado } from 'src/app/interfaces/salado.interface';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/product.service';
import { SaladoComponent } from '../salado.component';
import { Location } from '@angular/common';
@Component({
  selector: 'app-producto-salado',
  templateUrl: './producto-salado.component.html',
  styleUrls: ['../salado.component.css']
})
export class ProductoSaladoComponent implements OnInit {

  defaultImg =
    'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg';
  defaulttitle = "NOMBRE DEL PRODUCTO";

  salados: ISalado[] = [];

  // Arreglo para los salados
  carnes: ISalado[] = [];
  tipo : string = ""

  constructor(public productService: ProductService, 
    public modalService: ModalService,
    public saladoComponent: SaladoComponent,
    private _location: Location,
    public activatedRoute: ActivatedRoute) {
      this.activatedRoute.params.subscribe( params=>{
        // console.log(params['id']); para mostrar en consola el id
        this.tipo = (params ['id']);
        // console.log(this.tipo , "HOLAAA");
      })
     }

  ngOnInit(): void {
    this.showProducts();
  }

  showProducts() {
    this.productService.getSalados().subscribe((res: any[]) => {
      this.salados = res;
      this.cargarCarnes();
    });
  }

  abrirModal(array: ISalado[], index: number) {
    this.productService.salados$.next(array);
    this.productService.index$.next(index);
    this.modalService.mostrarModal();
  }

  cargarCarnes() {
    this.carnes = this.salados.filter((salado) => salado.tipo == this.tipo && salado.stock>0);
    console.log(this.carnes);
  }

  backClicked() {
    this._location.back();
  }

}
