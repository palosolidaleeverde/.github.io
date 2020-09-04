import { Component, HostListener, AfterViewInit, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {


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
