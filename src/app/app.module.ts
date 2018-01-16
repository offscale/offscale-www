import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

import { MaterialImportModule } from './material-import/material-import.module';
import { FooterModule } from './footer/footer';
import { SvgViewerModule } from './svg-viewer/svg-viewer';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, HttpModule,
    FlexLayoutModule, MaterialImportModule,
    FooterModule, SvgViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
