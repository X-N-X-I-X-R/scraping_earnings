import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FinnhubService } from '../../../src/app/components/detail-stock/finnhub.service';
import { finalize } from 'rxjs/operators';
import Chart from 'chart.js/auto';

declare var CanvasJS: any;

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit, AfterViewInit {
  stockForm: FormGroup;
  stockDetails: any;
  stockQuote: any;
  stockTargetPrice: any;
  stockTrend: any;
  stockHistoSentiment: any;
  stockBuzz: any;
  stockNews: any;
  stockEarnings: any;
  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private finnhubService: FinnhubService) {
    this.stockForm = this.fb.group({
      symbol: ['']
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.createEmptyCharts();
  }

  getStockDetails() {
    this.isLoading = true;
    const symbol = this.stockForm.get('symbol')?.value;

    const fetchData = (observable: any, setter: any) => {
      observable.pipe(finalize(() => this.isLoading = false)).subscribe({
        next: (data: any) => {
          console.log(`Data received for ${symbol}:`, data); // הוספת לוג
          setter(data);
        },
        error: (error: any) => {
          console.error('Error fetching data', error);
        }
      });
    };

    fetchData(this.finnhubService.getCompanyProfile(symbol), (data: any) => this.stockDetails = data);
    fetchData(this.finnhubService.getEarnings(symbol), (data: any) => {
      this.stockEarnings = data;
      this.updateEarningsChart(data);
    });
    fetchData(this.finnhubService.getQuote(symbol), (data: any) => this.stockQuote = data);
    fetchData(this.finnhubService.getHistoSentiment(symbol), (data: any) => {
      this.stockHistoSentiment = data;
      this.updateHistoChart(data);
    });
    fetchData(this.finnhubService.getLastNews(symbol), (data: any) => this.stockNews = data);
  }

  updateHistoChart(histo: any) {
    const dataPoints1 = histo.map((x: any) => ({ x: new Date(x.period), y: Number(x.strongSell) }));
    const dataPoints2 = histo.map((x: any) => ({ x: new Date(x.period), y: Number(x.sell) }));
    const dataPoints3 = histo.map((x: any) => ({ x: new Date(x.period), y: Number(x.hold) }));
    const dataPoints4 = histo.map((x: any) => ({ x: new Date(x.period), y: Number(x.buy) }));
    const dataPoints5 = histo.map((x: any) => ({ x: new Date(x.period), y: Number(x.strongBuy) }));

    const chart = new CanvasJS.StockChart("chartContainer", {
      theme: "light2",
      title: { text: "Historical Sentiment" },
      charts: [{
        axisY: { title: "Sentiment" },
        toolTip: { shared: true },
        data: [
          { type: "column", name: "Strong Sell", dataPoints: dataPoints1 },
          { type: "column", name: "Sell", dataPoints: dataPoints2 },
          { type: "column", name: "Hold", dataPoints: dataPoints3 },
          { type: "column", name: "Buy", dataPoints: dataPoints4 },
          { type: "column", name: "Strong Buy", dataPoints: dataPoints5 }
        ]
      }],
      rangeSelector: { enabled: false },
      navigator: { data: [{ dataPoints: dataPoints1 }] }
    });

    chart.render();
  }

  updateEarningsChart(earnings: any) {
    const dataPoints = earnings.map((x: any) => ({ x: new Date(x.date), y: Number(x.actual) }));

    const chart = new CanvasJS.StockChart("earningsChartContainer", {
      theme: "light2",
      title: { text: "Earnings" },
      charts: [{
        axisY: { title: "Earnings" },
        toolTip: { shared: true },
        data: [{ type: "line", name: "Earnings", dataPoints: dataPoints }]
      }],
      rangeSelector: { enabled: false },
      navigator: { data: [{ dataPoints: dataPoints }] }
    });

    chart.render();
  }

  createEmptyCharts() {
    const chartContainers = ["chartContainer", "earningsChartContainer"];
    chartContainers.forEach(containerId => {
      const canvas = document.getElementById(containerId);
      if (canvas) {
        const ctx = (canvas as HTMLCanvasElement).getContext("2d");
        if (ctx) {
          new Chart(ctx, {
            type: "bar",
            data: { labels: [], datasets: [] },
            options: {
              scales: {
                x: { stacked: true, grid: { display: false }, ticks: { autoSkip: true, maxTicksLimit: 10 } },
                y: { stacked: true, grid: { display: false } }
              },
              plugins: { legend: { display: true } }
            }
          });
        }
      }
    });
  }
}
