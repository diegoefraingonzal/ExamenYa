import { Component, OnInit } from '@angular/core';
import { ZenquotesService } from '../zenquotes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  quote: string = '';
  author: string = '';

  constructor(private zenQuotesSer: ZenquotesService) {}

  ngOnInit() {
    /*this.zenQuotesService.getQuote().subscribe((data: any) => {
      this.quote = data.q;
      this.author = data.a;
    });*/
    this.zenQuotesSer.getQ().subscribe((data: any) => {
      this.quote = data.q;
      this.author = data.a;
    });
  }
}
