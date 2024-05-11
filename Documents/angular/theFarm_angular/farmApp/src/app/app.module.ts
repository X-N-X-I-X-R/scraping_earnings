import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/Layout/Layout.component';
import { AppComponent } from './app.component';
import { Today_newsComponent } from './components/Today_news/Today_news.component';
import { Market_dataComponent } from './components/market_data/market_data.component';
import { EarningsComponent } from './components/Earnings/Earnings.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    Today_newsComponent,
    Market_dataComponent,
    EarningsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
        HttpClientModule // add HttpClientModule to the imports array

  ],
  providers: [],
  bootstrap: [LayoutComponent] // Bootstrap LayoutComponent instead of AppComponent
})
export class AppModule {/*...*/}