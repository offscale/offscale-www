import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatGridListModule } from '@angular/material';

import { NgVerticalTabsModule } from 'vertical-tabs';

import { SvgViewerModule } from '../svg-viewer/svg-viewer.module';
import { InfographicModule } from '../infographic/infographic.module';
import { RootComponent } from './root.component';
import { rootRoutes } from './root.routes';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [RootComponent],
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(rootRoutes),
    FlexLayoutModule,
    MatButtonModule, MatGridListModule,
    NgVerticalTabsModule.forRoot(),
    InfographicModule, SvgViewerModule
  ]
})
export class RootModule { }
