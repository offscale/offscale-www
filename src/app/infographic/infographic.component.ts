import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

import { ObservableMedia } from '@angular/flex-layout';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-infographic',
  animations: [
    trigger(
      'fade',
      [
        transition(
          ':enter', [
            style({ opacity: 0 }),
            animate(700, style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave', [
            animate(700, style({ opacity: 0 }))
          ]
        )]
    )
  ],
  templateUrl: './infographic.component.html',
  styleUrls: ['./lib.css', './infographic.component.scss']
})
export class InfographicComponent implements OnInit {
  key_tech: string;
  /**
   * The number of colums in the md-grid-list directive.
   */
  public cols: Observable<number>;

  constructor(private observableMedia: ObservableMedia) {}

  // tabs
  _multicloud: string;

  get multicloud(): string {
    return this._multicloud;
  }

  set multicloud(cloud: string) {
    this._multicloud = this._multicloud === cloud ? undefined : cloud;
  }

  _approach: string;

  get approach(): string {
    return this._approach;
  }

  set approach(goal: string) {
    this._approach = goal === this._approach ? undefined : goal;
  }

  ngOnInit() {
    const grid = new Map([
      ['xs', 1],
      ['sm', 2],
      ['md', 2],
      ['lg', 3],
      ['xl', 3]
    ]);
    let start: number;
    grid.forEach((cols, mqAlias) => {
      if (this.observableMedia.isActive(mqAlias)) {
        start = cols;
      }
    });
    this.cols = this.observableMedia.asObservable()
      .pipe(
        map(change => grid.get(change.mqAlias)),
        startWith(start)
      );
  }
}
