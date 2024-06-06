import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import Moment from "moment";

const moment = Moment;

@Injectable()
export class FinnhubService {
  constructor(private http: HttpClient) {}

  configUrl = "https://finnhub.io/api/v1/";
  token = "&token=cpbn7ihr01qqbq2abedgcpbn7ihr01qqbq2abee0";

  searchAssets(search: string) {
    console.log('Executing searchAssets function');
    return this.http.get(this.configUrl + "search?q=" + search + this.token);
  }

  getQuote(symbol: string) {
    console.log('Executing getQuote function');
    return this.http.get(this.configUrl + "quote?symbol=" + symbol + this.token);
  }

  getCompanyProfile(symbol: string) {
    console.log('Executing getCompanyProfile function');
    return this.http.get(this.configUrl + "stock/profile2?symbol=" + symbol + this.token);
  }

  getHistoSentiment(symbol: string) {
    console.log('Executing getHistoSentiment function');
    return this.http.get(this.configUrl + "stock/recommendation?symbol=" + symbol + this.token);
  }

  getEarnings(symbol: string) {
    console.log('Executing getEarnings function');
    return this.http.get(this.configUrl + "stock/earnings?symbol=" + symbol + this.token);
  }

  getLastNews(symbol: string) {
    console.log('Executing getLastNews function');
    return this.http.get(
      this.configUrl +
      "company-news?symbol=" +
      symbol +
      "&from=" +
      moment().subtract(5, "days").format("Y-MM-DD") +
      "&to=" +
      moment().format("Y-MM-DD") +
      this.token
    );
  }
}
