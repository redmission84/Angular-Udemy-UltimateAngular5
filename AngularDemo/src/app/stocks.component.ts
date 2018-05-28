import {Component} from '@angular/core';
import {StockService} from './stock.service'

@Component({
    selector: 'stocks',
    template: `<h2>Stocks</h2>
    {{title}}
    
    <ul [ngStyle]="{'color': myColor, 'font-size': mySize}">
        <li *ngFor="let stock of stocks">
            {{stock}}
        </li>
    </ul>
    
    <hr>
    <ul *ngIf="stockMarkets.length == 5" [ngClass]="{customClass:isColorBrown,centerClass:isCenter}">
        <li *ngFor="let stockMarket of stockMarkets">
            <div [ngSwitch]="stockMarket">
                <div *ngSwitchCase="'NYSE'">New York Stock Exchange</div>
                <div *ngSwitchCase="'LSE'">London Stock Exchange</div>
                <div *ngSwitchDefault>Could not find a match for {{stockMarket}}</div>
            </div>
        </li>
    </ul>

    <hr>

    <div [ngSwitch]="market">
        <div *ngSwitchCase="'NYSE'">New York Stock Exchange</div>
        <div *ngSwitchCase="'LSE'">London Stock Exchange</div>
        <div *ngSwitchDefault>Could not find a match for {{market}}</div>
    </div>
    `, styles: [
        `
            .customClass {color: brown;}
            .centerClass{text-align: center;}
        `
    ]
})

export class StocksComponent{
    isCenter = true;
    isColorBrown = true;
    myColor = 'blue';
    mySize = '200%';
    title = 'List of Stocks: ';
    stocks;
    showStockMarket=true;
    market = 'HKSE'

    stockMarkets = ['NYSE','NASDAQ','EURONEXT','HKSE','LSE'];

    constructor(stockService : StockService) {
        this.stocks = stockService.getStocks();
    }
}