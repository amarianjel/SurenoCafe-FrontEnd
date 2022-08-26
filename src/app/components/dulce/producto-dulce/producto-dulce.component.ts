import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDulce } from 'src/app/interfaces/dulce.interface';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/product.service';
import { DulceComponent } from '../dulce.component';
import { Location } from '@angular/common';
@Component({
  selector: 'app-producto-dulce',
  templateUrl: './producto-dulce.component.html',
  styleUrls: ['./producto-dulce.component.css']
})
export class ProductoDulceComponent implements OnInit {

  defaultImg =
    'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg';
  defaulttitle = "NOMBRE DEL PRODUCTO";

  dulces: IDulce[] = [];

  // Arreglo para los salados
  tipoDulce: IDulce[] = [];
  tipo : string = ""

  constructor(public productService: ProductService, 
    public modalService: ModalService,
    public dulceComponent: DulceComponent,
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
    this.productService.getDulces().subscribe((res: any[]) => {
      this.dulces = res;
      this.cargarPostre();
    });
  }

  abrirModal(array: IDulce[], index: number){
    this.productService.dulces$.next(array);
    this.productService.index$.next(index);
    this.modalService.mostrarModal();
  }

  cargarPostre(){
    this.tipoDulce = this.dulces.filter((dulce) => dulce.tipo == this.tipo && dulce.stock>0);
    // console.log(this.tipoDulce);
  }

  backClicked() {
    this._location.back();
  }

}
