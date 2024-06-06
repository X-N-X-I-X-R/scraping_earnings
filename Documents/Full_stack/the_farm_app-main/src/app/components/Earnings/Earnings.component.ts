import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { EarningsApiService, TickerService } from './earning_api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { trigger, state, style, transition, animate } from '@angular/animations';
// import { WatchlistComponent } from '../Watchlist/Watchlist.component';

@Component({
  selector: 'app-Earnings',
  templateUrl: './Earnings.component.html',
  styleUrls: ['./Earnings.component.css'],
  animations: [
    trigger('toggleState', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class EarningsComponent implements OnInit {

  earningsPage: any;
  selectedTicker: string = '';
  isOpen = true;
  toggleState = 'open';
  currentTickers: string[] = [];
  

  toggle(): void {
    this.toggleState = this.toggleState === 'open' ? 'closed' : 'open';
  }

  constructor(private earningsApiService: EarningsApiService, private modalService: NgbModal, private tickerService: TickerService, private el: ElementRef, private renderer: Renderer2) { } 

  ngOnInit(): void {
    this.earningsApiService.getEarningsPage().subscribe((data: any) => {
      this.earningsPage = data;
    });

    this.tickerService.currentTickers.subscribe(tickers => {
      this.currentTickers = tickers;
    });
  }

  addTicker(ticker: string): void {
    if (!this.currentTickers.includes(ticker)) {
      this.currentTickers.push(ticker);
  
      console.log("tickers watchlist", this.currentTickers);
    }
  }

  removeTicker(ticker: string): void {
    const index = this.currentTickers.indexOf(ticker);
    if (index > -1) {
      this.currentTickers.splice(index, 1);
    
    }
  }


}








  