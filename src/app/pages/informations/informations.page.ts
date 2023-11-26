import { Component, OnInit } from '@angular/core';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { Platform } from '@ionic/angular';
import { BackgroundSound } from 'src/app/models/backgroundSound.component';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.page.html',
  styleUrls: ['./informations.page.scss'],
})
export class InformationsPage implements OnInit {

  public version: string = '0.0.1';
  public volumeIcon: string = BackgroundSound.icon;

  constructor(
    private appVersion: AppVersion,
    private platform: Platform
  ) {
    if (this.platform.is('cordova')) {
      this.appVersion.getVersionNumber().then((versionApp: string) => {
        this.version = versionApp;
      });
    }
  }

  ngOnInit() {
  }

  toggleVolumeButton(){
    BackgroundSound.toggleBackgroundSound();
  }

}
