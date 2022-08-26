import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProductoSalado } from 'src/app/interfaces/productoSalado.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { IProductoDulce } from 'src/app/interfaces/productoDulce.interface';
import { LoginService } from 'src/app/services/login.service';
import { SidebarService } from 'src/app/services/sidebar.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  carritoSalado : IProductoSalado[] = this.shoppingCartService.productosSalados;
  carritoDulce : IProductoDulce[] = this.shoppingCartService.productosDulces;
  cantidad = 0;
  totalPrice =0;
  
  constructor(public productService: ProductService,
              public shoppingCartService: ShoppingCartService,
              public loginService: LoginService,
              public sidebarService: SidebarService,
              private formBuilder: FormBuilder, 
              private router: Router) { 
  }

  ngOnInit(): void {
  }
  
  

  

  // getCantidad(productoSalados: IProductoSalado) {
  //   return this.cantidad = this.shoppingCartService.productosSalados.filter(i => i.prodId == productoSalados.prodId).length;
  //   // return this.shoppingCartService.productosSalados.filter(i => i.prodId == productoSalados.prodId).length;
  // }
  addOneDulce(dulce: IProductoDulce) {
    this.shoppingCartService.addDulce(dulce);
  }

  removeOneDulce(dulce: IProductoDulce) {
    if (this.shoppingCartService.cantidad > 0) {
      this.shoppingCartService.removeOneDulce(dulce);
    }
  }
  removeDulce(dulce: IProductoDulce){
    this.shoppingCartService.removeDulce(dulce);
  }

  addOneSalado(salado: IProductoSalado) {
    this.shoppingCartService.addSalado(salado);
  }

  removeOneSalado(salado: IProductoSalado) {
    if (this.shoppingCartService.cantidad > 0) {
      this.shoppingCartService.removeOneSalado(salado);
    }
  }
  removeSalado(salado: IProductoSalado){
    this.shoppingCartService.removeSalado(salado);
  }
  agendarCarrito(){
    var loginCookie = localStorage.getItem('logueado');
    if(loginCookie == "1"){
      console.log("Ir a agendar");
      this.router.navigate(['/agendar']);
    }else{
      this.sidebarService.toggle();
    }
  }




  

}
