import { Injectable } from '@angular/core';
import * as finnhub from 'finnhub';

@Injectable({
  providedIn: 'root'
})
export class FinnhubService {
//  token = "&token=bvqts6n48v6ptdtktf9g";
  private apiKey: string = 'cpbn7ihr01qqbq2abedgcpbn7ihr01qqbq2abee0';
  private finnhubClient: any;
  baseUrl: string = 'https://finnhub.io/api/v1';

 constructor() {
    const api_key = finnhub.ApiClient.instance.authentications['api_key'];
    api_key.apiKey = this.apiKey;
    this.finnhubClient = new finnhub.DefaultApi();
  }

  async getStockPatents(symbol: string, from: string, to: string): Promise<any[]> {
  const url = `${this.baseUrl}/stock/uspto-patent?symbol=${symbol}&from=${from}&to=${to}&token=${this.apiKey}`;
  console.log('Request URL:', url);

  try {
    const response = await fetch(url);

    console.log('Response Status:', response.status, response.statusText);
    console.log('Response URL:', response.url);

    if (response.redirected) {
      console.error('Request was redirected to:', response.url);
      throw new Error('Request was redirected');
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();
      console.log('Response Data:', data);
      return data.data || [];
    } else {
      console.error('Unexpected content type:', contentType);
      throw new Error('Unexpected content type: ' + contentType);
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}



}


