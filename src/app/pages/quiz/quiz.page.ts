import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Letra } from 'src/app/models/letra.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  public letra: Letra = {} as Letra;
  public imagensQuiz: Array<any> = [] as any;
  public pontuation: number = 0;
  public canShowSlide: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.paramMap.subscribe(params => {
      let letra = params.get('data');
      if (letra) {
        this.letra = JSON.parse(letra);
        this.imagensQuiz = this.letra?.imagens_quiz;
      }
     });
  }
  
  goNext(index: any) {
    const swiperEl = document.querySelector('swiper-container');
    
    swiperEl?.swiper.slideNext();
    
    const point = Math.floor(Math.random() * 2);
    point == 1 ? this.pontuation++ : this.pontuation = this.pontuation;
    
    if (index == 3) {
      this.canShowSlide = false;
    }
  }

  markImage() {
    const img1 =  document.getElementById("img1");
    const img2 =  document.getElementById("img2");
    const img3 =  document.getElementById("img3");

    img1?.classList.contains("")
  }

  ngOnInit() {
  }

}
