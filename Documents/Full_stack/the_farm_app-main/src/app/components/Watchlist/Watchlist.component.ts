// import { Component, OnInit } from '@angular/core';
// import { TickerService } from '../Earnings/earning_api.service';

// @Component({
//   selector: 'app-watchlist',
//   templateUrl: './watchlist.component.html',
//   styleUrls: ['./watchlist.component.css']
  
// })
// export class WatchlistComponent implements OnInit {
//   currentTickers: string[] = [];

// constructor(private tickerService: TickerService) { }

// ngOnInit(): void {
//   this.tickerService.currentTickers.subscribe(tickers => {
//     this.currentTickers = tickers;
//   });
// }

//   loadWatchlist(): string[] {
//     return [];
//   }

//   public addTicker(ticker: string): void {
//     if (!this.currentTickers.includes(ticker)) {
//       this.currentTickers.push(ticker);
//       this.saveWatchlist();
//       console.log("tickers watchlist", this.currentTickers);
//     }
//   }

//   removeTicker(ticker: string): void {
//     const index = this.currentTickers.indexOf(ticker);
//     if (index > -1) {
//       this.currentTickers.splice(index, 1);
//       this.saveWatchlist();
//     }
//   }

//   saveWatchlist(): void {
//   }
// }