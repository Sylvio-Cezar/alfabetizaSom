import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})

export class DetailsPage implements OnInit {


  public letra: string = "";
  public data: Letra = new Letra();
  public isPhoneme: boolean = true;
  public imagemDetalheLetra: string = "";
  public snd = new Audio("../../assets/sounds/sfx-pop.mp3");
  static isPlaying: boolean = false;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(params => {
      let data = params.get('data');
      console.log(data);
      if (data)
        this.data = JSON.parse(data);
    });
    this.snd.addEventListener('ended', DetailsPage.soundIsFinished);
  }

  ngOnInit() {
    this.letra = this.data.nome_letra;
    this.imagemDetalheLetra = this.data.imagem_letra;
    this.changePhoneme(this.isPhoneme);
  }

  playSound() {
    if (!DetailsPage.isPlaying) {
      DetailsPage.isPlaying = true;
      this.snd.play().then(function(){}, function(){ DetailsPage.soundIsFinished(); });
      parent.document.querySelectorAll('[class*="sound-btn"]').
        forEach(btn => btn.setAttribute('disabled', 'true'));
    }
  }

  static soundIsFinished() {
    DetailsPage.isPlaying = false;
    parent.document.querySelectorAll('[class*="sound-btn"]').
      forEach(btn => btn.setAttribute('disabled', 'false'));
  }

  setAndPlaySound(filename: string) {
    if (!DetailsPage.isPlaying) {
      this.snd.src = '../../assets/sounds/' + filename;
      this.playSound();
    }
  }

  changePhoneme(value: boolean) {
    this.isPhoneme = value;

    let phonemeBtn = document.getElementById('phoneme-sound-btn');
    if (phonemeBtn)
      phonemeBtn.hidden = this.isPhoneme;

    let nameBtn = document.getElementById('name-sound-btn');
    if (nameBtn)
      nameBtn.hidden = !this.isPhoneme;
  }

}

class Letra {
  nome_letra = "";
  imagem_letra = "";
  som_nome_letra = "";
  fonemas = [];
};