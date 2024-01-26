import {
  Injectable,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';
import { Chart } from 'chart.js/auto';
import { IDataLineChart, IDataset } from '../interfaces/data-chart.interface';

@Injectable({
  providedIn: 'root',
})
export class ChartJsService {
  chart: Chart
  data: IDataLineChart = {} as IDataLineChart;

  createChart(id: string = 'MyChart') {
    this.chart = new Chart(id, {
      type: 'line',
      data: {
        labels: this.data.labels,
        datasets: this.generateDatasets(this.data.datasets),
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }

  updateDataChart(datas: IDataLineChart) {
    this.chart.data.labels = datas.labels;
    this.chart.data.datasets = this.generateDatasets(datas.datasets);
    this.chart.update();
  }

  private generateDatasets(datasets: IDataset[]): any {
    return datasets.map((value) => {
      return {
        label: value.label,
        data: value.datas,
        tension: 0.4,
        pointHoverBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: value.colors[1],
        pointBorderWidth: 1,
        pointBackgroundColor: value.colors[0],
        pointBorderColor: value.colors[0],
        borderColor: value.colors[0],
        backgroundColor: this.createGradient(value.colors[0], value.colors[1]),
        fill: true, // Permet de remplir la zone en dessous de la ligne,
      };
    });
  }

  private createGradient(color1: string, color2: string) {
    const ctx = document.createElement('canvas').getContext('2d');
    const gradient = ctx?.createLinearGradient(0, 0, 0, 400); // Ajustez ces valeurs selon votre besoin
    gradient?.addColorStop(0, color1);
    gradient?.addColorStop(1, color2);
    return gradient;
  }
}
