import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Letra } from 'src/app/models/letra.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})

export class DetailsPage implements OnInit {

  public letra: Letra = {} as Letra;
  public isPhoneme: boolean = true;
  public snd = new Audio();
  static isPlaying: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.paramMap.subscribe(params => {
      let letra = params.get('data');
      if (letra) {
        this.letra = JSON.parse(letra);
      }
     });
    this.snd.addEventListener('ended', DetailsPage.soundIsFinished);
  }

  ngOnInit() {
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
  }

}
