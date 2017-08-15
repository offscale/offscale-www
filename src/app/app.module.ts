import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import 'hammerjs';

import { AppComponent } from './app.component';
import { MaterialImportModule } from './material-import/material-import.module';
import { FooterModule } from './footer/footer';
import { SvgViewerModule } from './svg-viewer/svg-viewer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, HttpModule,
    MaterialImportModule, FooterModule, SvgViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
