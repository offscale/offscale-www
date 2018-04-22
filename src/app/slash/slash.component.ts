import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-slash',
  templateUrl: './slash.component.html',
  styleUrls: [
    '../infographic/lib.css',
    './slash.component.scss'
  ]
})
export class SlashComponent implements AfterViewInit {
  scrollToId(id: string) {
    const e = document.getElementById(id.startsWith('#') ? id.substring(1) : id);
    if (e != null)
      e.scrollIntoView({behavior: 'smooth'});
  }

  ngAfterViewInit() {
  }

  constructor() {
  }
}
