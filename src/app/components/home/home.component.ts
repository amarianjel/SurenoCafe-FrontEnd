import { Component, OnInit } from '@angular/core';
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

  constructor(public dulceComponent: DulceComponent, public pasteleriaComponent: PasteleriaComponent, public postreComponent: PostreComponent, public tortaComponent: TortaComponent) { }

  ngOnInit(): void {
    this.dulceComponent.showProducts();
  }

}
