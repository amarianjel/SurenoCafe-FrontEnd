import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { DulceComponent } from '../dulce/dulce.component';
import { PasteleriaComponent } from '../dulce/pasteleria/pasteleria.component';
import { PostreComponent } from '../dulce/postre/postre.component';
import { TortaComponent } from '../dulce/torta/torta.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dulcesMasVendidos:any;
  saladosMasVendidos:any;

  constructor(public dulceComponent: DulceComponent, public pasteleriaComponent: PasteleriaComponent, public postreComponent: PostreComponent, public tortaComponent: TortaComponent, public productService:ProductService) { }

  ngOnInit(): void {
    this.getDestacados();
  }

  getDestacados(){
    this.productService.getDulcesMasVendidos().subscribe( (res: any[]) => {
      this.dulcesMasVendidos = res;
      console.log(this.dulcesMasVendidos);
    });

    this.productService.getSaladosMasVendidos().subscribe( (res: any[]) => {
      this.saladosMasVendidos = res;
      console.log(this.saladosMasVendidos);
    });
  }

}
