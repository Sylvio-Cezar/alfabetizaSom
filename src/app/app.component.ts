import { Component } from '@angular/core';
import { BackgroundSound } from './models/backgroundSound.component';
import { Platform, ToastController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private _location: Location,
    private toastCtrl: ToastController,
    private router: Router
  ) {
    new BackgroundSound();

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      let last: number = 0, exit: number = 2000;

      this.platform.backButton.subscribeWithPriority(10, () => {

        if (this.router.url === '/tabs/home') {
          if (new Date().getTime() - last > exit) {
            this.presentToast();
            last = new Date().getTime();
          } else {
            (navigator as any).app.exitApp();
          }
        } else {
          this._location.back();
        }

      });

      if (this.platform.is('cordova')){

        this.platform.pause.subscribe(() => {
          BackgroundSound.pauseSound()
        });

        this.platform.resume.subscribe(() => {
          BackgroundSound.playSound();
        });
       }
    });
  }

  private async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Pressione novamente para fechar o aplicativo.',
      duration: 3000
    });
    toast.present();
  }
}