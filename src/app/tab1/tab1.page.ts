import { Component } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [Media]
})
export class Tab1Page {

  public letra: String = "A";
  public isPhoneme: boolean = true;
  public imagemDetalheLetra: String = "";

  private mediaObject!: MediaObject;

  constructor(
      private media: Media,
      private platform: Platform
    ) {}

  ngOnInit() {
    // Ensure the platform is ready before initializing media
    this.platform.ready().then(() => {
      this.mediaObject = this.media.create('../../assets/sounds/sfx-pop.mp3');

      this.mediaObject.onError.subscribe(error => {
        console.error('Media initialization error:', error);
      });
    });

    this.imagemDetalheLetra = "../../assets/images/letras-detalhes/Detalhes-" + this.letra + ".png";
  }

  playSound() {
    if (this.mediaObject) {
      this.mediaObject.play(); // Play the sound
    }
  }

  changePhoneme(value: boolean) {
    this.isPhoneme = value;
  }

}
