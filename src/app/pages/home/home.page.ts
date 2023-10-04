import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlfabetoService } from 'src/app/services/alfabeto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public letra: string = "A";
  public letras: any;
  public digrafos: any;
  public imagemDetalheLetra: string = "";

  constructor(
    private alfabetoService: AlfabetoService,
    private router: Router
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

  openDetails(data: any) {
    this.router.navigate([`/tabs/home/details`, { data: data }])
  }

}
