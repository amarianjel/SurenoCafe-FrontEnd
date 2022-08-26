import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { ProductService } from '../../services/product.service';
import { IDulce } from '../../interfaces/dulce.interface';

@Component({
  selector: 'app-dulce',
  templateUrl: './dulce.component.html',
  styleUrls: ['./dulce.component.css'],
})
export class DulceComponent implements OnInit {
  defaultImg =
    'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg';
  defaultTitle = 'NOMBRE DEL PRODUCTO';

  dulces: IDulce[] = [];
  tipos: string[] = [];
  rutas: string[] = ['/pasteleria', '/postre', '/torta'];

  constructor( public productService: ProductService, public modalService: ModalService ) {}

  ngOnInit(): void {
    this.showProducts();
  }

  showProducts(){
    this.productService.getDulces().subscribe( (res: any[]) => {
      this.dulces = res;
      console.log(this.dulces);
      this.cargarTipos(res);
    });
  }

  cargarTipos(res: any[]){
    res.forEach(dul => {
      if(!this.tipos.includes(dul.tipo)){
        this.tipos.push(dul.tipo);
      }
    });
  }

  cargarPortada(tipo: string) {
    return this.dulces.filter((dulce) => dulce.tipo == tipo);
  }

  getTipos(){
    console.log(this.tipos);
    return this.tipos;
  }
}
