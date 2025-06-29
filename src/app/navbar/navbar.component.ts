import { Component } from '@angular/core';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss', '../../assets/styles/flex.scss'],
    standalone: false
})
export class NavbarComponent {
  openUrl(url: string, target: string) {
    window.open(url, target)
  }
}
