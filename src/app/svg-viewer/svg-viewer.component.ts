import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Http } from '@angular/http';

const getAbsolutePathFromSrc = (src: string) => src.slice(src.indexOf('assets/') - 1);

@Component({
  selector: 'app-svg-viewer',
  template: `<div class='app-svg-viewer' [ngStyle]="ngstyle" aria-hidden='true'></div>`,
  styleUrls: ['./svg-viewer.component.css']
})
export class SvgViewerComponent implements OnInit {
  @Input() src: string;
  @Input() scaleToContainer: boolean;
  @Input() styles: string;
  ngstyle: string;

  constructor(private elementRef: ElementRef, private http: Http) {
  }

  ngOnInit() {
    this.fetchAndInlineSvgContent(this.src);
  }

  private inlineSvgContent(template) {
    this.elementRef.nativeElement.innerHTML = template;

    if (this.scaleToContainer) {
      const svg = this.elementRef.nativeElement.querySelector('svg');
      svg.setAttribute('width', '100%');
      svg.setAttribute('height', '100%');
      svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    }
    if (this.styles && this.styles.length) {
      this.ngstyle = `${this.styles}`;
    }
  }

  private fetchAndInlineSvgContent(path: string): void {
    const svgAbsPath = getAbsolutePathFromSrc(path);
    this.http.get(svgAbsPath).subscribe(svgResponse =>
      this.inlineSvgContent(svgResponse.text())
    );
  }
}
