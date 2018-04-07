import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatSelectModule, MatToolbarModule } from '@angular/material';

import { PlatformPickerModule } from '../platform-picker/platform-picker.module';
import { SvgViewerModule } from '../svg-viewer/svg-viewer.module';
import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [
    CommonModule, RouterModule,
    MatButtonModule, MatIconModule, MatToolbarModule, MatSelectModule,
    PlatformPickerModule, SvgViewerModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NavbarModule {
}
