import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackgroundSound } from 'src/app/models/backgroundSound.component';
import { AlfabetoService } from 'src/app/services/alfabeto.service';

@Component({
  selector: 'app-syllables',
  templateUrl: './syllables.page.html',
  styleUrls: ['./syllables.page.scss'],
})
export class SyllablesPage implements OnInit {

  public letra: any = {} as any;
  public vogais: Array<any> = [] as Array<any>;
  public volumeIcon: string = BackgroundSound.icon;

  constructor(
    private activatedRoute: ActivatedRoute,
    private alfabetoService: AlfabetoService
  ) {
    this.activatedRoute.paramMap.subscribe(params => {
      let letra = params.get('data');
      if (letra) {
        this.letra = JSON.parse(letra);
        console.log(this.letra);
      }
     });
  }

  ngOnInit() {
    this.getVogais();
  }

  getVogais() {
    this.alfabetoService.getVogais().subscribe(data => {
      let vogaisArr: Array<any> = [];
      vogaisArr.push(data.alfabeto_brasileiro);

      console.log(vogaisArr);

      vogaisArr[0].forEach((element: any) => {
        console.log(element)
        this.vogais.push(element.imagem);
      });
      console.log(this.vogais);
    });
  }

  toggleVolumeButton(){
    BackgroundSound.toggleBackgroundSound();
  }

}
