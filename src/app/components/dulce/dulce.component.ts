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

  // Arreglos para guardar por cada tipo de dulce
  pasteleria: IDulce[] = [];
  postres: IDulce[] = [];
  tortas: IDulce[] = [];

  constructor( public productService: ProductService, public modalService: ModalService ) {}

  ngOnInit(): void {
    //Cargan todos los dulces
    this.showProducts();

    //Cargan los dulces por tipo
    // this.cargarPasteleria();
    // this.cargarPostres();
    // this.cargarTortas();
  }

  showProducts() {
    this.productService.getDulces().subscribe( (res: any[])=>{
      this.dulces = res;
      console.log(this.dulces);
      console.log("HOLAAA");
      this.cargarPasteleria();
      this.cargarPostres();
      this.cargarTortas();
    });
  }

  //Funcion que se ejecuta cuando se hace click en el arreglo pasado por parametro
  // y el indice del dulce seleccionado hacia el observable
  abrirModal(array: IDulce[], index: number) {
    //Se le settea el arreglo a la variable obervable
    this.productService.dulces$.next(array);
    //Se le settea el indice a la variable obervable
    this.productService.index$.next(index);
    this.modalService.mostrarModal();
  }

  // CARGAR DULCES POR TIPO
  // Se cargan los dulces por tipo através del método filter
  cargarPasteleria() {
    this.pasteleria = this.dulces.filter(
      (dulce) => dulce.tipo == 'Pasteleria'
    );
    console.log(this.pasteleria);
  }
  cargarPostres() {
    this.postres = this.dulces.filter((dulce) => dulce.tipo == 'Postres');
    console.log(this.postres);
  }
  cargarTortas() {
    this.tortas = this.dulces.filter((dulce) => dulce.tipo == 'Tortas');
    console.log(this.tortas);
  }
}
