import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISalado } from 'src/app/interfaces/salado.interface';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-salado',
  templateUrl: './salado.component.html',
  styleUrls: ['./salado.component.css']
})
export class SaladoComponent implements OnInit {
  defaultimg = "https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg";
  defaulttitle = "NOMBRE DEL PRODUCTO";

  salados: ISalado[] = [];

  tipos: string[] = [];

  rutas: string[] = ['/carne', '/acompanhamiento', '/guiso','/lasanha','/pollo_relleno','/quinche'];
  
  constructor( public productService: ProductService, private readonly router: Router ) { }

  ngOnInit(): void {
    this.showProducts();
    console.log(this.tipos);
  }

  showProducts(){
    this.productService.getSalados().subscribe( (res: any[]) => {
      this.salados = res;
      console.log(this.salados);
      this.cargarTipos(res);
    });
  }

  cargarTipos(res: any[]){
    res.forEach(sal => {
      if(!this.tipos.includes(sal.tipo)){
        this.tipos.push(sal.tipo);
      }
    });
    console.log(this.tipos);
  }

  cargarPortada(tipo: string) {
    return this.salados.filter((salado) => salado.tipo == tipo);
  }

}
