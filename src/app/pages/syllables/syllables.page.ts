import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Letra } from 'src/app/models/letra.model';

@Component({
  selector: 'app-syllables',
  templateUrl: './syllables.page.html',
  styleUrls: ['./syllables.page.scss'],
})
export class SyllablesPage implements OnInit {

  public letra: Letra = {} as Letra;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.paramMap.subscribe(params => {
      let letra = params.get('data');
      if (letra) {
        this.letra = JSON.parse(letra);
      }
     });
  }

  ngOnInit() {
  }

}
