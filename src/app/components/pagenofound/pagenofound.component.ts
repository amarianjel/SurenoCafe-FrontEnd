import { Component} from '@angular/core';

@Component({
  selector: 'app-pagenofound',
  templateUrl: './pagenofound.component.html',
  styleUrls: ['./pagenofound.component.css']
})
export class PagenofoundComponent {

  year = new Date().getFullYear();
}
