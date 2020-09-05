import { Component, HostListener, AfterViewInit, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      1100: {
        items: 4
      }
    },
    nav: true
  };

  title = 'palosolidaleeverde';
  mybutton: HTMLButtonElement;

  ngAfterViewInit(): void {
    this.mybutton = document.getElementById('myBtn') as HTMLButtonElement;
  }

  ngOnInit(): void {
    setTimeout(() => {
      $('#cookieConsent').fadeIn(200);
    }, 4000);
    ($('#closeCookieConsent, .cookieConsentOK') as any).click(() => {
      $('#cookieConsent').fadeOut(200);
    });
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event): void {
    this.scrollFunction();
  }

  scrollFunction(): void {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.mybutton.style.display = 'block';
    } else {
      this.mybutton.style.display = 'none';
    }
  }
  topFunction(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


}
