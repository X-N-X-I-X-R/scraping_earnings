import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Today_newsComponent } from './components/Today_news/Today_news.component';
import { Market_dataComponent } from './components/market_data/market_data.component';
import { EarningsComponent } from './components/Earnings/Earnings.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'today-news', component: Today_newsComponent },
  { path: 'market-data', component: Market_dataComponent },
  { path: 'earnings', component: EarningsComponent },
  { path: '', component: AppComponent, pathMatch: 'full' } // Use AppComponent for the '' path
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }