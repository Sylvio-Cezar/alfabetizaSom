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
  public totalImages: Array<String> = [] as Array<String>
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
     this.getLetras();

     this.totalImages.push(this.imagens[8])
     console.log(this.imagens[8])
     this.totalImages.push(this.imagens[69])
     this.totalImages.push(this.imagensQuiz[0])

     console.log(this.totalImages)
  }

  getLetras() {
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
