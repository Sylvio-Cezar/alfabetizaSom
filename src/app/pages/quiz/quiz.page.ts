import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Letra } from 'src/app/models/letra.model';
import { AlfabetoService } from 'src/app/services/alfabeto.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  public letra: Letra = {} as Letra;
  public imagens: Array<String> = [] as Array<String>;
  public imagensQuiz: Array<any> = [] as any;
  public pontuation: number = 0;
  public canShowSlide: boolean = true;
  public canGoNext: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private alfabetoService: AlfabetoService
  ) {
    this.activatedRoute.paramMap.subscribe(params => {
      let letra = params.get('data');
      if (letra) {
        this.letra = JSON.parse(letra);
        this.imagensQuiz = this.letra?.imagens_quiz;
      }
     });
  }

  getLetras() {
    this.alfabetoService.getLetras().subscribe(data => {
      const letras = data.alfabeto_brasileiro;
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

    this.canGoNext = false;
  }

  markImage(field: any, index: number) {
    const img1 = document.getElementById("first-img" + index);
    const img2 = document.getElementById("second-img" + index);
    const img3 = document.getElementById("third-img" + index);

    if (field == "first") {
      img1?.classList.toggle("border-green");
      img2?.classList.remove("border-green");
      img3?.classList.remove("border-green");
    } else if (field == "second") {
      img1?.classList.remove("border-green");
      img2?.classList.toggle("border-green");
      img3?.classList.remove("border-green");
    } else {
      img1?.classList.remove("border-green");
      img2?.classList.remove("border-green");
      img3?.classList.toggle("border-green");
    }

    this.canGoNext = true;
  }

  ngOnInit() {
  }

}
