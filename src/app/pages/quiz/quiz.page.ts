import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackgroundSound } from 'src/app/models/backgroundSound.component';
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
  public perPageImages: Array<String> = [] as Array<String>
  public pontuation: number = 0;
  public totalPontuation: number = 0;
  public canShowSlide: boolean = true;
  public canGoNext: boolean = false;
  public volumeIcon: string = BackgroundSound.icon;

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
     this.getImagens(0);
  }

  getImagens(index: number) {
    this.alfabetoService.getLetras().subscribe(data => {
      const letras = data.alfabeto_brasileiro;
      letras.forEach((elem: any) => {
        let indexImg: Array<any> =  [];
        indexImg.push(elem.imagens_quiz);
        indexImg[0].forEach((elem: any) => {
          this.imagens.push(elem);
        });
      });
      this.imagens = this.imagens.filter(elem => !elem.startsWith(`./assets/images/quiz/images/Quiz-${this.letra.nome}`))
      const shuffle = (array: String[]) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };
      this.imagens = shuffle(this.imagens);

      this.perPageImages = [];

      this.perPageImages.push(this.imagens[index]);
      this.perPageImages.push(this.imagens[index + 10]);
      this.perPageImages.push(this.imagensQuiz[index]);

      this.perPageImages = shuffle(this.perPageImages);
    });
  }

  goNext(index: any) {
    const swiperEl = document.querySelector('swiper-container');

    swiperEl?.swiper.slideNext();

    this.getImagens(index + 1);

    this.totalPontuation += this.pontuation;

    if (index == 3) {
      this.canShowSlide = false;
    }

    this.canGoNext = false;
  }

  markImage(field: any, index: number) {
    const img1 = document.getElementById("first-img" + index);
    const img2 = document.getElementById("second-img" + index);
    const img3 = document.getElementById("third-img" + index);

    console.log(img1?.getAttribute("src"))
    console.log(img2?.getAttribute("src"))
    console.log(img3?.getAttribute("src"))

    if (field == "first") {
      img1?.classList.toggle("border-green");
      img2?.classList.remove("border-green");
      img3?.classList.remove("border-green");

      let imgUrl: any = "";
      imgUrl = img1?.getAttribute("src");

      if (imgUrl.startsWith(`./assets/images/quiz/images/Quiz-${this.letra.nome}`)) {
        this.pontuation = 1;
      } else {
        this.pontuation = 0;
      }
    } else if (field == "second") {
      img1?.classList.remove("border-green");
      img2?.classList.toggle("border-green");
      img3?.classList.remove("border-green");

      let imgUrl: any = "";
      imgUrl = img2?.getAttribute("src");

      if (imgUrl.startsWith(`./assets/images/quiz/images/Quiz-${this.letra.nome}`)) {
        this.pontuation = 1;
      } else {
        this.pontuation = 0;
      }
    } else {
      img1?.classList.remove("border-green");
      img2?.classList.remove("border-green");
      img3?.classList.toggle("border-green");

      let imgUrl: any = "";
      imgUrl = img3?.getAttribute("src");

      if (imgUrl.startsWith(`./assets/images/quiz/images/Quiz-${this.letra.nome}`)) {
        this.pontuation = 1;
      } else {
        this.pontuation = 0;
      }
    }
    this.canGoNext = true;
  }

  ngOnInit() {
  }

  toggleVolumeButton(){
    BackgroundSound.toggleBackgroundSound();
  }

}
