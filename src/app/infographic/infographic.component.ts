import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infographic',
  templateUrl: './infographic.component.html',
  styleUrls: ['./lib.css', './infographic.component.scss']
})
export class InfographicComponent implements OnInit {
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

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
  }
}
