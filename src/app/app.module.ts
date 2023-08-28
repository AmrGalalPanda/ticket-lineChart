import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketChartComponent } from './ticket-chart/ticket-chart.component';
import { HighchartsChartModule } from 'highcharts-angular'

@NgModule({
  declarations: [
    AppComponent,
    TicketChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
