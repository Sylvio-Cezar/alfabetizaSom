import { Component } from '@angular/core';
import { BackgroundSound } from './models/backgroundSound.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    new BackgroundSound();
  }
}
