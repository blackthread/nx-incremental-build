import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BookingFeatureSearchModule } from '@magic-flight/booking/feature-search';
import { BookingFeatureUpgradeModule } from '@magic-flight/booking/feature-upgrade';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, BookingFeatureSearchModule, BookingFeatureUpgradeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
