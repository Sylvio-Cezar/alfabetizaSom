import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public letra: string = "A";
  public isPhoneme: boolean = true;
  public imagemDetalheLetra: string = "";
  public snd = new Audio("../../assets/sounds/sfx-pop.mp3");
  isPlaying: boolean = false;

  constructor() {}

  ngOnInit() {
    this.imagemDetalheLetra = "../../assets/images/letras-detalhes/Detalhes-" + this.letra + ".png";
  }

  playSound() {
    if (this.isPlaying) {
      this.snd.pause();
      this.snd.currentTime = 0;
      this.isPlaying = false;
    } else {
      this.snd.play();
      this.isPlaying = true;
    }
  }

  changePhoneme(value: boolean) {
    this.isPhoneme = value;
  }

}
