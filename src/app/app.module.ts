import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material';

import { PlatformPickerService } from './platform-picker/platform-picker.service';
import { GettingStartedModule } from './getting-started/getting-started.module';
import { FooterModule } from './footer/footer.module';
import { NavbarModule } from './navbar/navbar.module';
import { SlashModule } from './slash/slash.module';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, RouterModule, RouterModule.forRoot(appRoutes),
    MatIconModule,
    NavbarModule, FooterModule,
    // SlashModule, GettingStartedModule
  ],
  providers: [PlatformPickerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
