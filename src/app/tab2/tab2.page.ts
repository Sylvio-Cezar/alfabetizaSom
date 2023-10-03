import { Component } from '@angular/core';
import { AlfabetoService } from '../services/alfabeto.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public letra: string = "A";
  public letras: any;
  public digrafos: any;
  public imagemDetalheLetra: string = "";

  constructor(
    private alfabetoService: AlfabetoService
  ) {}

  ngOnInit() {
    this.getLetras();
    this.getDigrafos();
    this.imagemDetalheLetra = "../../assets/images/letras-detalhes/Detalhes-" + this.letra + ".png";
  }

  getLetras() {
    this.alfabetoService.getLetras().subscribe(data => {
      this.letras = data.alfabeto_brasileiro;
      console.log(this.letras)
    });
  }

  getDigrafos() {
    this.alfabetoService.getDigrafos().subscribe(data => {
      this.digrafos = data.digrafos_brasileiros;
      console.log(this.digrafos)
    });
  }

}
