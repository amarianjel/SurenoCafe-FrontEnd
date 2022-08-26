import { Component } from '@angular/core';
//Mio
import{ IDulce } from './interfaces/dulce.interface';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SurenoCafe';
  onActive(){
    window.scroll(0,0);
  }

  dulces: IDulce[] = [];
   //Injección de dependencias
   constructor(public productService: ProductService){}

   ngOnInit(): void{
    // this.productService.getProducts().subscribe( (res: any[])=>{
    //   this.dulces = res;
    // })
  }
}
