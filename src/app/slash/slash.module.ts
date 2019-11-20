import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';

import { SlashComponent } from './slash.component';
import { slashRoutes } from './slash.routes';
import { SvgViewerModule } from '../svg-viewer/svg-viewer.module';


@NgModule({
  declarations: [SlashComponent],
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(slashRoutes),
    FlexLayoutModule, SvgViewerModule
  ]
})
export class SlashModule {}
