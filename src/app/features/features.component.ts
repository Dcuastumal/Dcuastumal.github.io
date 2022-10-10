import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-features',
  templateUrl: './features.component.html'
})
export class FeaturesComponent implements OnInit {

  public title: string;

  constructor() {
    this.title = "Soy el feature component";
  }

  ngOnInit(): void {
    console.log("Se ha ejecutado el componente features")
  }
}
