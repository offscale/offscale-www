import { Component } from '@angular/core';

@Component({
  selector: 'offscale-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // TODO: Get the <a> not to mess with CSS so I can skip this hack
  openHref(url: string) {
    const win = window.open(url, '_blank');
    win.focus();
  }
}
