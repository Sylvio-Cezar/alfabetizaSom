import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlfabetoService } from 'src/app/services/alfabeto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public letras: any;
  public digrafos: any;

  constructor(
    private alfabetoService: AlfabetoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getLetras();
    this.getDigrafos();
  }

  getLetras() {
    this.alfabetoService.getVogais().subscribe(data => {
      this.letras = data.alfabeto_brasileiro;
    });
  }

  getDigrafos() {
    this.alfabetoService.getDigrafos().subscribe(data => {
      this.digrafos = data.digrafos_brasileiros;
    });
  }

  openDetails(data: any) {
    this.router.navigate([`/tabs/home/details`, { data: JSON.stringify(data) }])
  }

}
