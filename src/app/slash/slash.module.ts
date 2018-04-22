import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material';
import { TabsModule } from 'angular-vertical-tabs/dist';
import { InfographicModule } from '../infographic/infographic.module';


import { SlashComponent } from './slash.component';
import { slashRoutes } from './slash.routes';
import { SvgViewerModule } from '../svg-viewer/svg-viewer.module';



@NgModule({
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(slashRoutes),
    MatTabsModule,
    FlexLayoutModule,
    SvgViewerModule,
    InfographicModule,
    TabsModule.forRoot()
  ],
  declarations: [SlashComponent]
})
export class SlashModule {
}
