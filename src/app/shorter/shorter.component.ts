import { Component, OnInit } from '@angular/core';
import { ShorterLink } from '../models/link';

@Component({
  selector: 'app-shorter',
  templateUrl: './shorter.component.html',
  styleUrls: ['./shorter.component.css']
})
export class ShorterComponent implements OnInit {

  public shorterLink: ShorterLink;

  constructor() {
    this.shorterLink = new ShorterLink('');
   }

  ngOnInit(): void {
  }

  onSubmit(form: any): void {
    console.log('shorter submit event successfully');
    console.log(this.shorterLink);

    setTimeout(() => { form.reset();
    }, 1300);
  };
}
