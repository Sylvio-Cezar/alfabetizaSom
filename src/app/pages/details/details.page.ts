import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackgroundSound } from 'src/app/models/backgroundSound.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})

export class DetailsPage implements OnInit {

  public letra: any;
  public isPhoneme: boolean = true;
  public snd = new Audio();
  static isPlaying: boolean = false;
  public volumeIcon: string = BackgroundSound.icon;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
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

  toggleVolumeButton(){
    BackgroundSound.toggleBackgroundSound();
  }

  playSound() {
    if (!DetailsPage.isPlaying) {
      DetailsPage.isPlaying = true;
      BackgroundSound.setSoundVolume(0.1);
      this.snd.play().then(function(){}, function(){ DetailsPage.soundIsFinished(); });
      parent.document.querySelectorAll('[class*="sound-btn"]').
        forEach(btn => btn.setAttribute('disabled', 'true'));
    }
  }

  static soundIsFinished() {
    DetailsPage.isPlaying = false;
    BackgroundSound.setSoundVolume(0.4);
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

  openSyllables() {
    this.router.navigate([`/tabs/home/syllables`, { data: JSON.stringify(this.letra) }])
  }

  openQuiz() {
    this.router.navigate([`/tabs/home/quiz`, { data: JSON.stringify(this.letra) }])
  }

}
