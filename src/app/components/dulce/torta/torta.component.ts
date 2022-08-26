import { Component, OnInit } from '@angular/core';
import { IDulce } from 'src/app/interfaces/dulce.interface';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/product.service';
import { DulceComponent } from '../dulce.component';

@Component({
  selector: 'app-torta',
  templateUrl: './torta.component.html',
  styleUrls: ['../dulce.component.css']
})
export class TortaComponent implements OnInit {
  defaultImg =
  'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg';

  dulces: IDulce[] = [];
  torta: IDulce[] = [];
  
  constructor(public modalService: ModalService, public productService: ProductService, public dulceComponent: DulceComponent) { }
  
  ngOnInit(): void {
    this.showProducts();
  }
  
  showProducts(){
    this.productService.getDulces().subscribe((res: any[]) => {
      this.dulces = res;
      this.cargarPostre();
    });
  }
  
  cargarPostre(){
    this.torta = this.dulces.filter((dulce) => dulce.tipo == 'Tortas');
  }
  
  abrirModal(array: IDulce[], index: number){
    this.productService.dulces$.next(array);
    this.productService.index$.next(index);
    this.modalService.mostrarModal();
  }

}
