import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
//Mio
import{ IDulce } from './interfaces/dulce.interface';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'SurenoCafe';
  @ViewChild('drawer') public drawer!: MatDrawer;

  onActive(){
    window.scroll(0,0);
  }

  dulces: IDulce[] = [];
   //Injección de dependencias
   constructor(public productService: ProductService,
                public sideBarService: SidebarService
                ){}
                
  ngAfterViewInit(): void {
    this.sideBarService.setDrawer(this.drawer);
  }

   ngOnInit(): void{
    
    // console.log(this.shoppingCartService.productosSalados);
    
    // this.productService.getProducts().subscribe( (res: any[])=>{
    //   this.dulces = res;
    // })
  }
}
