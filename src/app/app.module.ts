import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketChartComponent } from './ticket-chart/ticket-chart.component';
import { HighchartsChartModule } from 'highcharts-angular'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { TicketSalesComponent } from './ticket-sales/ticket-sales.component';
import { DataTableComponent } from './data-table/data-table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {DataTablesModule} from 'angular-datatables'

@NgModule({
  declarations: [
    AppComponent,
    TicketChartComponent,
    NavbarComponent,
    TicketSalesComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    HttpClientModule,
    FontAwesomeModule,
    DataTablesModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:httpTranslateLoader,
        deps:[HttpClient]
      }
    }),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function httpTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http)
}