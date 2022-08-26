import { Injectable } from '@angular/core';
import { IProductoDulce } from '../interfaces/productoDulce.interface';
import { IProductoSalado } from '../interfaces/productoSalado.interface';
@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  cantidad = 0;
  totalPrice =0;
  productosSalados : IProductoSalado[] = [];
  productosDulces : IProductoDulce[] = [];
  constructor() {

    this.productosSalados = JSON.parse(localStorage.getItem('itemsSalados') ||'[]');
    this.productosDulces = JSON.parse(localStorage.getItem('itemsDulces') ||'[]');
    this.cantidad = JSON.parse(localStorage.getItem('cantidad') ||'[]');
    this.totalPrice = JSON.parse(localStorage.getItem('precioTotal') ||'[]');
    // console.log(this.productosSalados);
    // console.log(this.productosDulces);

   }

  vaciarCarrito(){
    this.productosSalados = [];
    this.productosDulces = [];
    this.cantidad = 0;
    this.totalPrice = 0;
    this.syncItems();
  }

  removeSalado(productoSalado: IProductoSalado) {
    const index = this.productosSalados.indexOf(productoSalado);
    this.cantidad -= this.productosSalados[index].quantity!;
    this.totalPrice -= (productoSalado.price*this.productosSalados[index].quantity!);
    this.productosSalados.splice(index,1);
    if (this.cantidad<=0){
      this.cantidad=0;
      this.totalPrice=0;
    }
    this.syncItems();
  }
  removeDulce(productoDulce: IProductoDulce) {
    const index = this.productosDulces.indexOf(productoDulce);
    this.cantidad -= this.productosDulces[index].quantity!;
    this.totalPrice -= (productoDulce.price*this.productosDulces[index].quantity!);
    this.productosDulces.splice(index,1);
    if (this.cantidad<=0){
      this.cantidad=0;
      this.totalPrice=0;
    }
    this.syncItems();
  }
  removeOneSalado(productoSalado: IProductoSalado){
    const index = this.productosSalados.indexOf(productoSalado);
    if (this.cantidad>0){
      this.cantidad -= 1;
      this.productosSalados[index].quantity! -=1;
      this.totalPrice -= productoSalado.price;
    }
    if(this.productosSalados[index].quantity! <=0){
      this.removeSalado(productoSalado);
    }
    this.syncItems();
  }
  removeOneDulce(productoDulce: IProductoSalado){
    const index = this.productosDulces.indexOf(productoDulce);
    if (this.cantidad>0){
      this.cantidad -= 1;
      this.productosDulces[index].quantity! -=1;
      this.totalPrice -= productoDulce.price;
    }
    if(this.productosDulces[index].quantity! <=0){
      this.removeDulce(productoDulce);
    }
    this.syncItems();
  }

  addSalado(productoSalado: IProductoSalado) {
    if(productoSalado.quantity === undefined){
      productoSalado.quantity=1;
    }
    const exist = this.productosSalados.find((item)=>{
      return item.prodId === productoSalado.prodId;
    })
    if(exist){
      if(exist.stock>exist.quantity!){
        exist.quantity! += 1;
        this.totalPrice += productoSalado.price;
        this.cantidad++;
      }else{
        alert("No hay stock suficiente para agregar mas productos");
      }
    }else{
      this.productosSalados.push(productoSalado);
      this.totalPrice += productoSalado.price;
      this.cantidad++;
    }
      // this.cantidad++;
    console.log(this.productosSalados);
    this.syncItems();
  }
  addDulce(productoDulce: IProductoSalado) {
    if(productoDulce.quantity === undefined){
      productoDulce.quantity=1;
    }
    const exist = this.productosDulces.find((item)=>{
      return item.prodId === productoDulce.prodId;
    })
    if(exist){
      if(exist.stock>exist.quantity!){
        exist.quantity! += 1;
        this.totalPrice += productoDulce.price;
        this.cantidad++;
      }else{
        alert("No hay stock suficiente para agregar mas productos");
      }
    }else{
      this.productosDulces.push(productoDulce);
      this.totalPrice += productoDulce.price;
      this.cantidad++;
    }
      // this.cantidad++;
    console.log(this.productosDulces);
    this.syncItems();
  }

  getCantidad() : number{
    return this.cantidad;
  }
  // getLengthDulce() : number{
  //   return this.cantidad;
  // }

  // getItemsDulce(){
  //   return this.productosDulces.slice(0)
  // }

  syncItems(){
    localStorage.setItem('itemsSalados',JSON.stringify(this.productosSalados)); // sync the data
    localStorage.setItem('itemsDulces',JSON.stringify(this.productosDulces));
    localStorage.setItem('cantidad',JSON.stringify(this.cantidad));
    localStorage.setItem('precioTotal',JSON.stringify(this.totalPrice));
  }



}
