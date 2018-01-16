import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatGridListModule, MatInputModule,
  MatMenuModule, MatProgressBarModule, MatSidenavModule, MatSnackBarModule, MatToolbarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatInputModule, MatButtonModule, MatCheckboxModule, MatSidenavModule,
    MatProgressBarModule, MatCardModule, MatMenuModule, MatDialogModule,
    MatSnackBarModule, MatToolbarModule, MatGridListModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatInputModule, MatButtonModule, MatCheckboxModule, MatSidenavModule,
    MatProgressBarModule, MatCardModule, MatMenuModule, MatDialogModule,
    MatSnackBarModule, MatToolbarModule, MatGridListModule
  ]
})
export class MaterialImportModule {
}
