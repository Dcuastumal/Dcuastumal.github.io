import { Component } from '@angular/core';

@Component( {
  selector: 'app-features',
  templateUrl: './features.component.html'
})
export class FeaturesComponent {

  public title: string;

  constructor() {
    this.title = "Soy el feature component";
  }

}
