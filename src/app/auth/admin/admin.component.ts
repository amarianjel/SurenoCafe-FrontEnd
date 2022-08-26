import { Component, OnInit } from '@angular/core';
import { IAuth } from 'src/app/interfaces/auth.interface';
import { IDulce } from 'src/app/interfaces/dulce.interface';
import { ISalado } from 'src/app/interfaces/salado.interface';
import { AuthService } from 'src/app/services/auth.service';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  defaultImg =
    'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg';
  defaultTitle = 'NOMBRE DEL PRODUCTO';

  auths: IAuth[] = [];
  dulces: IDulce[] = [];
  salados: ISalado[] = [];

  constructor(public authService: AuthService, public modalService: ModalService, public productService:ProductService ) { }

  ngOnInit(): void {
    this.showAuths();
    this.showProducts();
  }

  showProducts(){
    this.productService.getDulces().subscribe( (res: any[]) => {
      this.dulces = res;
    });
    this.productService.getSalados().subscribe( (res: any[]) => {
      this.salados = res;
    });
  }

  showAuths(){
    this.authService.getAuth().subscribe( (res: any[]) => {
      this.auths = res;
      console.log(this.auths);
    });
  }

}
