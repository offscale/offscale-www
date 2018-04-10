import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-slash',
  templateUrl: './slash.component.html',
  styleUrls: [
    '../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    './slash.component.scss'
  ]
})
export class SlashComponent implements AfterViewInit {
  // tabs
  _multicloud: string;
  set multicloud(cloud: string) {
    this._multicloud = this._multicloud === cloud ? undefined : cloud;
    this.changeDetectorRef.markForCheck();
    this.changeDetectorRef.detectChanges();
  }

  get multicloud(): string {
    return this._multicloud;
  }

  _approach: string;

  set approach(goal: string) {
    this._approach = goal === this._approach ? undefined : goal;
  }

  get approach(): string {
    return this._approach;
  }

  key_tech: string;

  scrollToId(id: string) {
    const e = document.getElementById(id.startsWith('#') ? id.substring(1) : id);
    if (e != null)
      e.scrollIntoView({behavior: 'smooth'});
  }

  scrollToTop() {
    document.getElementsByTagName('app-navbar')[0].scrollIntoView({behavior: 'smooth'});
  }

  ngAfterViewInit() {
  }

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }
}
