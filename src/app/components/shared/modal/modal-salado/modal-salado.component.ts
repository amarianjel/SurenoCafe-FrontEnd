import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/product.service';
import { ISalado } from '../../../../interfaces/salado.interface';
import { ModalService } from '../../../../services/modal.service';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-modal-salado',
  templateUrl: './modal-salado.component.html',
  styleUrls: ['./modal-salado.component.css']
})
export class ModalSaladoComponent implements OnInit {

  salados: ISalado[] = [];

  salado!: ISalado;
  
  index = 0;

  defaultImg =
    'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg';

  constructor(
    public modalService: ModalService,
    public productService: ProductService,
    public shoppingCartService: ShoppingCartService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.showProducts();
  }

  //Función que navega hacia el pedido
  toPedidos() {
    this.modalService.ocultarModal();
    // this.router.navigate(['/pedidos']);
  }

  //Muestra los dulces del tipo seleccionado
  showProducts() {
    this.productService.salados$.subscribe((salados) => {
      this.salados = salados;
    });
    this.productService.index$.subscribe((index) => {
      this.index = index;
      this.salado = this.salados[index];
    });
  }

  //Funcion encargada de mostrar el dulce seleccionado del arreglo
  cambiarDerecha() {
    if (this.index < this.salados.length - 1) {
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

  addToCart(producto: ISalado){
    this.shoppingCartService.addSalado(producto);
  }

}
