import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  protected debug = environment.development;
  private CLASS_NAME = 'HomePage';

  constructor() {
    console.debug(`${this.CLASS_NAME}.constructor()`);
  }
}
