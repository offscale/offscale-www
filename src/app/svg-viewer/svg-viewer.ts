import { Component, ElementRef, Input, NgModule, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'offscale-svg-viewer',
  template: '<div class="offscale-svg-viewer" aria-hidden="true"></div>',
})
export class SvgViewerComponent implements OnInit {
  @Input() src: string;
  @Input() scaleToContainer: boolean;

  constructor(private elementRef: ElementRef, private http: Http) { }

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
  }

  private fetchAndInlineSvgContent(path: string): void {
    const svgAbsPath = getAbsolutePathFromSrc(path);
    this.http.get(svgAbsPath).subscribe(svgResponse => {
      this.inlineSvgContent(svgResponse.text());
    });
  }
}

const getAbsolutePathFromSrc = (src: string) =>
  src.slice(src.indexOf('assets/') - 1);

@NgModule({
  exports: [SvgViewerComponent],
  declarations: [SvgViewerComponent],
})
export class SvgViewerModule {}
