import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GettingStartedComponent } from './getting-started.component';
import { gettingStartedRoutes } from './getting-started.routes';
import { PlatformPickerService } from '../platform-picker/platform-picker.service';

// import { CodeblockModule } from 'angular-prism';

// import { ConfigBuilderModule } from '../config-builder/config-builder.module';


@NgModule({
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(gettingStartedRoutes),
    // CodeblockModule, ConfigBuilderModule
  ],
  providers: [PlatformPickerService],
  declarations: [GettingStartedComponent]
})
export class GettingStartedModule {
}
