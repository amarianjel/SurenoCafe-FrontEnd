import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/product.service';
import { IDulce } from '../../../../interfaces/dulce.interface';
import { ModalService } from '../../../../services/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-dulce',
  templateUrl: './modal-dulce.component.html',
  styleUrls: ['./modal-dulce.component.css'],
})
export class ModalDulceComponent implements OnInit {

  //Arreglo que guarda los dulces del tipo seleccionado desde el DulceComponent
  dulces: IDulce[] = [];

  // Variables para mostrar el dulce seleccionado
  dulce!: IDulce;

  // Variable que guarda el indice del dulce seleccionado para luego mostrar en el dulce
  index = 0;

  defaultImg =
    'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg';

  constructor(
    public modalService: ModalService,
    public productService: ProductService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.showProducts();
  }

  //Función que navega hacia el pedido
  toPedidos() {
    this.modalService.ocultarModal();
    this.router.navigate(['/pedidos']);
  }

  //Muestra los dulces del tipo seleccionado
  showProducts() {
    this.productService.dulces$.subscribe((dulces) => {
      //Guarda los dulces que se han asigando en DulceComponent y los guarda en el arreglo dulces
      this.dulces = dulces;
    });
    this.productService.index$.subscribe((index) => {
      //Guarda el indice del dulce seleccionado en DulceComponent y lo guarda en la variable index
      this.index = index;
      //Se asigna el dulce seleccionado a la variable dulce a través del indice
      this.dulce = this.dulces[index];
    });
  }

  //Funcion encargada de mostrar el dulce seleccionado del arreglo
  cambiarDerecha() {
    if (this.index < this.dulces.length - 1) {
      this.productService.index$.next(this.index + 1);
    }
  }

  //Funcion encargada de mostrar el dulce seleccionado del arreglo
  cambiarIzquierda() {
    if (this.index > 0) {
      this.productService.index$.next(this.index - 1);
    }
  }

  ocultarModal() {
    this.modalService.ocultarModal();
  }
}
