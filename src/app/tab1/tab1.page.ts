import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public letra: String = "A";
  public isPhoneme: boolean = true;

  constructor() {}

  changePhoneme(value: boolean) {
    this.isPhoneme = value;
  }

}
