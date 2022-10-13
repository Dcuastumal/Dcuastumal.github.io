import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ShorterLink } from '../models/link';
import { RequestService } from '../services/request.service';


@Component({
  selector: 'app-shorter',
  templateUrl: './shorter.component.html',
  styleUrls: ['./shorter.component.css'],
  providers: [RequestService]
})
export class ShorterComponent implements OnInit {

  @ViewChild('btnCopy') btnCopy: ElementRef | any;
  @ViewChild('btnCopyFull') btnCopyFull: ElementRef | any;
  @ViewChild('link') link: ElementRef | any;

  public shorterLink!: ShorterLink;
  public link_saved: any;

  public btn: boolean = false;
  public sBtn: string;
  public sBtn2: string;

  constructor(public _requestService: RequestService, private renderer2: Renderer2) {
    this.shorterLink = new ShorterLink('');
    this.sBtn = "Copy";
    this.sBtn2 = "Copy";
  }

  ngOnInit(): void {
    console.log("OnInit called")
  }

  shortLink(form: any): void {
    //console.log(this.link.value);

    this._requestService.getLink(this.link.value).subscribe( data => this.link_saved = data.result )

    form.reset();
  }

  validate():void {
    this.btn = true;
  }

  changeColor():void {
    const _btnCopy = this.btnCopy.nativeElement as HTMLElement;
    this.renderer2.removeClass(_btnCopy, 'second-btn');
    this.renderer2.addClass(_btnCopy, 'copied');
    this.sBtn = "Copied!";

    setTimeout(() => {
      this.renderer2.removeClass(_btnCopy, 'copied');
      this.renderer2.addClass(_btnCopy, 'second-btn');
      this.sBtn = "Copy";
    }, 1000);
  }

  changeColor2():void {
    const _btnCopyFull = this.btnCopyFull.nativeElement as HTMLElement;
    this.renderer2.removeClass(_btnCopyFull, 'second-btn');
    this.renderer2.addClass(_btnCopyFull, 'copied');
    this.sBtn2 = "Copied!";

    setTimeout(() => {
      this.renderer2.removeClass(_btnCopyFull, 'copied');
      this.renderer2.addClass(_btnCopyFull, 'second-btn');
      this.sBtn2 = "Copy";
    }, 1000);
  }

}


