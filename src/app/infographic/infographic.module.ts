import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { InfographicComponent } from './infographic.component';
import { MaterialImportModule } from '../material-import/material-import.module';
import { SvgViewerModule } from '../svg-viewer/svg-viewer.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule, MaterialImportModule,
    SvgViewerModule
  ],
  declarations: [InfographicComponent],
  exports: [InfographicComponent]
})
export class InfographicModule {
}
