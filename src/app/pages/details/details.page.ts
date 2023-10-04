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
