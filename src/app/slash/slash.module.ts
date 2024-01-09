import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SvgViewerModule } from '../svg-viewer/svg-viewer.module';
import { NavbarModule } from '../navbar/navbar.module';
import { SlashComponent } from './slash.component';
import { slashRoutes } from './slash.routes';


@NgModule({
  declarations: [SlashComponent],
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(slashRoutes),
    SvgViewerModule, NavbarModule
  ]
})
export class SlashModule {}
