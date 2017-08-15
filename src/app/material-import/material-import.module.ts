import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdDialogModule,
  MdGridListModule,
  MdInputModule,
  MdMenuModule,
  MdProgressBarModule,
  MdSidenavModule,
  MdSnackBarModule,
  MdToolbarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MdInputModule, MdButtonModule, MdCheckboxModule, MdSidenavModule,
    MdProgressBarModule, MdCardModule, MdMenuModule, MdDialogModule,
    MdSnackBarModule, MdToolbarModule, MdGridListModule
  ],
  exports: [
    BrowserAnimationsModule,
    MdInputModule, MdButtonModule, MdCheckboxModule, MdSidenavModule,
    MdProgressBarModule, MdCardModule, MdMenuModule, MdDialogModule,
    MdSnackBarModule, MdToolbarModule, MdGridListModule
  ]
})
export class MaterialImportModule {
}
