import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer.component';

@NgModule({
  imports: [
    CommonModule, RouterModule, MatToolbarModule
  ],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule {
}
