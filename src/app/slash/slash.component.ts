import { Component } from '@angular/core';

@Component({
  selector: 'app-slash',
  templateUrl: './slash.component.html',
  styleUrls: ['./slash.component.scss']
})
export class SlashComponent {
  // TODO: Get the <a> not to mess with CSS so I can skip this hack
  openHref(url: string) {
    const win = window.open(url, '_blank');
    win.focus();
  }
}
