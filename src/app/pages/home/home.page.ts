import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackgroundSound } from 'src/app/models/backgroundSound.component';
import { AlfabetoService } from 'src/app/services/alfabeto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public letras: any;
  public digrafos: any;
  public volumeIcon: string = BackgroundSound.icon;

  constructor(
    private alfabetoService: AlfabetoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getLetras();
    this.getDigrafos();
  }

  toggleVolumeButton(){
    BackgroundSound.toggleBackgroundSound();
  }

  getLetras() {
    this.alfabetoService.getLetras().subscribe(data => {
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
