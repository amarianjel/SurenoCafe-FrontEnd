import { NumberSymbol } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProductoDulce } from 'src/app/interfaces/productoDulce.interface';
import { IProductoSalado } from 'src/app/interfaces/productoSalado.interface';

import { LoginService } from 'src/app/services/login.service';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  
  minDate: Date | undefined;
  maxDate: Date | undefined;

  fechaElegida: any;
  selected = '';
  local = "";//1 es cinco de abril -- 2 es flores millán -- 3 es constitucion
  idactual: number;
  hours: any[];

  carritoSalado : IProductoSalado[] = this.shoppingCartService.productosSalados;
  carritoDulce : IProductoDulce[] = this.shoppingCartService.productosDulces;

  agendadoCorrectamente: boolean = false;


  constructor(public loginService: LoginService, public shoppingCart: ShoppingCartService, public http: HttpClient, public productService: ProductService,
    public shoppingCartService: ShoppingCartService) {
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() + 1);
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() + 6);

  }
  getUrl( query:string){
    const url = `http://localhost:3000/${query}`;

    return url;
  }

  isWeekend() {
    if (this.fechaElegida) {
      if (this.fechaElegida.getDay() == 0 || this.fechaElegida.getDay() == 6) {
        return true;

      } else {
        return false;
      }

    } else {
      return false;
    }
  }

  filterHours() {
    if (this.local == "1" && this.fechaElegida.getDay() == 0) {
      this.hours = [
        "10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", "13:00", "13:15", "13:30", "13:45", "14:00", "14:15", "14:30", "14:45", "15:00",
      ];
      return this.hours;
    } else if (this.local == "1") {
      this.hours = [
        "10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", "13:00", "13:15", "13:30", "13:45", "14:00", "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", "16:00", "16:15", "16:30", "16:45", "17:00", "17:15", "17:30", "17:45", "18:00", "18:15", "18:30", "18:45", "19:00"
      ];
      return this.hours;
    } else if (this.local == "2") {
      this.hours = [
        "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", "13:00", "13:15", "13:30",
        "15:00", "15:15", "15:30", "15:45", "16:00", "16:15", "16:30", "16:45", "17:00", "17:15", "17:30", "17:45", "18:00", "18:15", "18:30", "18:45", "19:00"
      ];
      return this.hours;
    } else if (this.local == "3") {
      this.hours = [
        "10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", "13:00", "13:15", "13:30", "13:45", "14:00", "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", "16:00", "16:15", "16:30", "16:45", "17:00", "17:15", "17:30"
      ];
      return this.hours;
    }


    return [""];

  }




  changeStore() {
    switch (this.local) {
      case "1":
        this.local = "5 de Abril";
        return this.local;
      case "2":
        this.local = "Constitución";
        return this.local;
      case "3":
        this.local = "Flores de Millán";
        return this.local;
    }
    return this.local;
  }


 


  botonAgendar() {
    if (this.loginService.loggedIn()) {
      let pedido = {
        fPedido: new Date().getFullYear() + "/" + (new Date().getMonth()+1) + "/" + new Date().getDate(),
        fAgendada: this.fechaElegida.getFullYear() + "/" + (this.fechaElegida.getMonth()+1) + "/" + this.fechaElegida.getDate(),
        email: localStorage.getItem('email'),
        hora: this.selected,
        local: this.changeStore()
      }
      console.log(pedido);
      this.http.post<any>(this.getUrl("pedido/"), pedido).subscribe((res) => {
        if (res.ok) {
          this.idactual = res.id;
          console.log("Pedido agendado correctamente");
            for (let i = 0; i < this.shoppingCart.productosSalados.length; i++) {
              let detalle = {
                id_pedido: this.idactual,
                prodId: this.shoppingCart.productosSalados[i].prodId,
                cantidad_producto: this.shoppingCart.productosSalados[i].quantity
              }
              let stock = ((this.shoppingCart.productosSalados[i].stock)-(this.shoppingCart.productosSalados[i].quantity!));
              console.log(detalle);
              this.http.post<any>(this.getUrl("salados/contieneSalado/"), detalle).subscribe(
                (res) => {
                  if (res.ok) {
                    console.log("Detalle agregado correctamente");

                  }else {
                    console.log("Error al agregar detalle");

                  }
                });
              this.productService.actualizarStockProductoSalado(stock, detalle.prodId);
            }

            for (let i = 0; i < this.shoppingCart.productosDulces.length; i++) {
              let detalle2 = {
                id_pedido: this.idactual,
                prodId: this.shoppingCart.productosDulces[i].prodId,
                cantidad_producto: this.shoppingCart.productosDulces[i].quantity
              }
              let stock = ((this.shoppingCart.productosDulces[i].stock)-(this.shoppingCart.productosDulces[i].quantity!));

              console.log(detalle2);
              this.http.post<any>(this.getUrl("dulces/contieneDulce/"), detalle2).subscribe(
                (res) => {
                  if (res.ok) {
                    console.log("Detalle agregado correctamente");
                    
                  } else {
                    console.log("Error al agregar detalle");

                  }
                  this.productService.actualizarStockProductoDulce(stock, detalle2.prodId);
                });
            }
            this.agendadoCorrectamente = true;            
            this.shoppingCart.vaciarCarrito();
          } else {
            alert("Error al agendar pedido");
          }
        }
        );        
    }
  }
     







  




  ngOnInit(): void {
  }

  isValid() {
    if (this.fechaElegida && this.local && this.selected) {
      return true;
    }
    return false;
  }
  
}

