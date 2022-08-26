import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isMobileLayout = false;
  constructor( public shoppingCartService : ShoppingCartService, public sideBarService: SidebarService, public loginService: LoginService) { }

  ngOnInit(): void {
    window.onresize = () => this.isMobileLayout = window.innerWidth <= 991;
  }
  toggleDrawer() {
    this.sideBarService.toggle();
  }
  logout(){
    this.loginService.logout();
  }
}
