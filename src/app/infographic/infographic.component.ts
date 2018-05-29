import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { Observable } from 'rxjs';
import { ObservableMedia } from '@angular/flex-layout';
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
  // tabs
  _multicloud: string;
  set multicloud(cloud: string) {
    this._multicloud = this._multicloud === cloud ? undefined : cloud;
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

  /**
   * The number of colums in the md-grid-list directive.
   */
  public cols: Observable<number>;

  constructor(private observableMedia: ObservableMedia) {}

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
