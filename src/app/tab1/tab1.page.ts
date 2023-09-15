import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  public letra: string = "A";
  public isPhoneme: boolean = true;
  public imagemDetalheLetra: string = "";
  public snd = new Audio("../../assets/sounds/sfx-pop.mp3");


  constructor() {}

  ngOnInit() {
    this.imagemDetalheLetra = "../../assets/images/letras-detalhes/Detalhes-" + this.letra + ".png";
  }

  playSound() {
    this.snd.play();
  }

  changePhoneme(value: boolean) {
    this.isPhoneme = value;
  }

}
