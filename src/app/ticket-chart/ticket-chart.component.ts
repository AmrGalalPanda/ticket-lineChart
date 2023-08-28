import { Component } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';

@Component({
  selector: 'app-ticket-chart',
  templateUrl: './ticket-chart.component.html',
  styleUrls: ['./ticket-chart.component.scss']
})
export class TicketChartComponent {

  chartOptions: any;
  highcharts: typeof Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
    this.getLineChart();
  }

  getLineChart(){
    this.chartOptions = {
      chart: {
        type : 'areaspline',
        zooming: {
          mouseWheel: false
      }
      },
      title:{
        text: 'Monthly average temperatue'
        , align:'right'
      },
      subtitle:{
        source: 'Source: worldclimate.com'
      },
      xAxis: {
        categories:[
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
        ],    
            reversed: true

      
        
      },
      
      plotOptions: {
        series: {
          pointStart: 0, 

            color: '#8A74F9',
            fillColor: {
                linearGradient: [0, 0, 0, 400],
                stops: [
                    [0, "rgba(138, 116, 249, 0.4)"],
                    [0.50, "rgba(255, 255, 255, 0.3)"],
                    [1, "rgba(255, 255, 255, 0.0)"]
                ]
            },
            marker: {
              enabled: false,
              states: {
                  hover: {
                      enabled: true
                  }
              }
          }
        }
    },
      yAxis:{
       /*  title:{
          text:'Temperature °C'
        }, */
        labels: {
          enabled: false
      },
      
      
      },
      tooltip:{
        valueSuffix:'users'
      },
      credits:{
        enabled:false
      },
      navigator:{
        enabled:false
      },
      rangeSelector:{
        enabled:true,
        dropdown: "always",
        inputEnabled : true,
        
      },
      scrollbar:{
        enabled:false
      },
      series:this.chartData
    }
  }

  chartData = [
    {
      name: 'User',
      showInLegend: false,  
      data: [100, 40, 60, 90, 100, 70, 60, 100, 0, 40, 70, 100]
      
    },
    
 /*    {
      name: 'New York',
      data: [0, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
    }, */
   /*  {
      name: 'Berlin',
      data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
    },
    {
      name: 'London',
      data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    } */
  ]
}
