import { Component } from '@angular/core';
import { navbar } from './models/navbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public navbar: any;
  public isMenuOpened: boolean = false;

  constructor() {
    this.navbar = navbar;
  }

  toggleMenu():void {
    this.isMenuOpened = !this.isMenuOpened;
  }

  clickedOutside():void {
    this.isMenuOpened = false;
  }
}
