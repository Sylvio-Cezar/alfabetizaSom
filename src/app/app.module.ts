import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppVersion } from '@ionic-native/app-version/ngx';

import { register } from 'swiper/element/bundle';

import { Platform } from '@ionic/angular';
import { Location } from '@angular/common';

register();

@NgModule({
  declarations: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AppVersion],
  bootstrap: [AppComponent],
}) 

export class AppModule {

  constructor(
    private platform: Platform,
    private _location: Location
  ) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this._location.back();
    });
  }

}
