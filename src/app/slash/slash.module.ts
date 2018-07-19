import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material';

import { VerticalTabsModule } from 'vertical-tabs';

import { InfographicModule } from '../infographic/infographic.module';
import { SvgViewerModule } from '../svg-viewer/svg-viewer.module';
import { SlashComponent } from './slash.component';
import { slashRoutes } from './slash.routes';


@NgModule({
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(slashRoutes),
    MatTabsModule,
    FlexLayoutModule,
    SvgViewerModule,
    InfographicModule,
    VerticalTabsModule.forRoot()
  ],
  declarations: [SlashComponent]
})
export class SlashModule {
}
