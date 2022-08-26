import { Component, OnInit } from '@angular/core';
import { ISalado } from 'src/app/interfaces/salado.interface';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-acompanhamientos',
  templateUrl: './acompanhamientos.component.html',
  styleUrls: ['../salado.component.css']
})
export class AcompanhamientosComponent implements OnInit {

  defaultImg =
    'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg';
  defaulttitle = "NOMBRE DEL PRODUCTO";

  salados: ISalado[] = [];
  
  acompanhamientos: ISalado[] = [];
  
  constructor( public productService: ProductService, public modalService: ModalService ) { }

  ngOnInit(): void {
    this.showProducts();
  }

  showProducts(){
    this.productService.getSalados().subscribe( (res: any[] ) => {
      this.salados = res;
      this.cargarAcompanhamientos();
    });
  }


  abrirModal(array: ISalado[], index: number) {
    this.productService.salados$.next(array);
    this.productService.index$.next(index);
    this.modalService.mostrarModal();
  }

  cargarAcompanhamientos(){
    this.acompanhamientos = this.salados.filter((salado) => salado.tipo == 'Acompañamientos');
    console.log(this.acompanhamientos);
  }

}
