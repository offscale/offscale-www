import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material';

import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule, RouterModule.forRoot(appRoutes),
    MatIconModule,
    NavbarModule, FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
