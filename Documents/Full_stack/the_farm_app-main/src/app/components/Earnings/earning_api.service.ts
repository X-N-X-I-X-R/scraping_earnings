import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EarningsApiService {
  private apiUrl = 'http://127.0.0.1:8888/'; 

  constructor(private http: HttpClient) { }

  getEarningsPage(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}earning/`);
  }
}


@Injectable({
  providedIn: 'root'
})
export class TickerService {
  private tickersSource = new BehaviorSubject<string[]>([]);
  currentTickers = this.tickersSource.asObservable();

  addTicker(ticker: any): void {
    let currentTickers = this.tickersSource.getValue();
    currentTickers.push(ticker);
    this.tickersSource.next(currentTickers);
    console.log("tickersapi", currentTickers);
    
  }

}