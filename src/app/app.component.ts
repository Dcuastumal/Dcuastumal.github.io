import { Component } from '@angular/core';
import { navbar } from './models/navbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Url-shortening-landing-page';

  public navbar: any;

  constructor() {
    this.navbar = navbar;
  }
}
