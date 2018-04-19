import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatCommonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  // MatTabsModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatCommonModule,
    MatAutocompleteModule, MatButtonModule, MatCardModule, MatCheckboxModule,
    MatCommonModule, MatDialogModule, MatFormFieldModule, MatGridListModule,
    MatIconModule, MatInputModule, MatMenuModule, MatProgressBarModule,
    MatSelectModule, MatSidenavModule, MatSnackBarModule, // MatTabsModule,
    MatToolbarModule
  ],
  exports: [
    MatAutocompleteModule, MatButtonModule, MatCardModule, MatCheckboxModule,
    MatCommonModule, MatDialogModule, MatFormFieldModule, MatGridListModule,
    MatIconModule, MatInputModule, MatMenuModule, MatProgressBarModule,
    MatSelectModule, MatSidenavModule, MatSnackBarModule, // MatTabsModule,
    MatToolbarModule
  ]
})
export class MaterialImportModule {
}
