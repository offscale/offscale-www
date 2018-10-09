import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  constructor() {
  }

  scrollToTop() {
    document.getElementsByTagName('app-navbar')[0].scrollIntoView({ behavior: 'smooth' });
  }

  ngOnInit() {
  }
}
