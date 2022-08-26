import { Component, OnInit } from '@angular/core';
import { DulceComponent } from '../dulce/dulce.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dulceComponent: DulceComponent) { }

  ngOnInit(): void {
    this.dulceComponent.showProducts();
  }

}
