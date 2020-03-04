import { Component } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'skb200304';
  constructor() {
    // tslint:disable-next-line: no-string-literal
    window['jQuery'](() => {
      console.log('ok');
    });
  }
}
