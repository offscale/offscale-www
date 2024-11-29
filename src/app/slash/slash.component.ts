import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-slash',
    templateUrl: './slash.component.html',
    styleUrls: ['./slash.component.scss', '../../assets/styles/flex.scss'],
    standalone: false
})
export class SlashComponent implements OnInit {
  safeHtml;
  videoNumber: string;

  ngOnInit() {
  }

  constructor(private sanitizer: DomSanitizer) {
    this.videoNumber = '287747';
    this.safeHtml = sanitizer.bypassSecurityTrustHtml('<iframe style="width: 100%; height: 500px" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" src="https://asciinema.org/a/' + this.videoNumber + '/iframe"></iframe>');
  }
}
