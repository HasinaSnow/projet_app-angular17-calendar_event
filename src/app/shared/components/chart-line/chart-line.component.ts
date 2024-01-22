import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Signal, WritableSignal, computed } from '@angular/core';
import { Chart, ChartConfiguration, ChartType } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { IDataChart } from '../../interfaces/data-chart.interface';

@Component({
  selector: 'app-chart-line',
  standalone: true,
  imports: [
    CommonModule,
    NgChartsModule
  ],
  templateUrl: './chart-line.component.html',
  styleUrl: './chart-line.component.scss'
})
export class ChartLineComponent implements OnInit {

  @Input({required: true}) values: IDataChart[]
  datasets: any[]

  constructor() {
    Chart.register();
  }

  ngOnInit(): void {
    this.initDatasets()
    this.initLineChartData()
    console.log(this.lineChartData)
  }

  lineChartType: ChartType = 'line';
  lineChartData: ChartConfiguration['data'] = {
      datasets: [],
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  }

  lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    plugins: {
      legend: {
          display: true,
          labels: {
              color: '#959ba8'
          }
      }
    },
    scales: {
      y: {
        position: 'left',
        ticks: {
            color: '#959ba8',
        },
      },
      x: {
        ticks: {
          color: '#959ba8'
        }
      }
      // y1: {
      //   position: 'right',
      //   grid: {
      //     color: 'rgba(255,0,0,0.3)',
      //   },
      //   ticks: {
      //     color: 'red',
      //   },
      // },
    },
  };

  initDatasets() {
    this.datasets = this.values.map(value => {
      return {
        data: value.data,
        label: value.label,
        backgroundColor: value.bgColor,
        borderColor: value.color,
        pointBackgroundColor: value.color,
        pointBorderColor: value.color,
        pointHoverBackgroundColor: value.color,
        pointHoverBorderColor: value.color,
        fill: 'origin',
      }
    })
  }

  initLineChartData() {
    this.lineChartData.datasets = this.datasets
  }

}
