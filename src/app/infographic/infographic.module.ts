import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule, MatGridListModule, MatIconModule } from '@angular/material';

import { SvgViewerModule } from '../svg-viewer/svg-viewer.module';
import { InfographicComponent } from './infographic.component';



@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatGridListModule, MatIconModule, MatButtonModule,
    SvgViewerModule
  ],
  declarations: [InfographicComponent],
  exports: [InfographicComponent]
})
export class InfographicModule {
}
