import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  keyword = 'skb200304';

  data: any[] = [];

  constructor(private http: HttpClient) {
    // tslint:disable-next-line: no-string-literal
    window['jQuery'](() => {
      console.log('ok');
    });
  }

  ngOnInit(): void {

    this.http.get<any[]>('/api/articles.json').subscribe(result => {
      this.data = result;
    });

  }

  doSearch(value) {
    this.keyword = value;
  }
}
