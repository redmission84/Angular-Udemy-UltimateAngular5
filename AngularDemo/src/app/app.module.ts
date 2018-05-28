import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MutualfundsComponent } from './mutualfunds/mutualfunds.component';
import { StocksComponent } from './stocks.component';
import { StockDirectiveDirective } from './stock-directive.directive';
import { HighlightDirective } from './highlight.directive';
import {StockService} from './stock.service';
import {CurrencyService} from './currency.service';
import { DateFormatterPipe } from './date-formatter.pipe'
import {routing} from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BondsDirective } from './bonds.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    MutualfundsComponent,
    StocksComponent,
    StockDirectiveDirective,
    DateFormatterPipe,
    DashboardComponent,
    BondsDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [StockService, CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
