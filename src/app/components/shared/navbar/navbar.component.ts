import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isMobileLayout = false;
  constructor() { }

  ngOnInit(): void {
    window.onresize = () => this.isMobileLayout = window.innerWidth <= 991;
  }

}
