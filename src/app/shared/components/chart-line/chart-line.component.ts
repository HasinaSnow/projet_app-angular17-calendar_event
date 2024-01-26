import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, Signal, WritableSignal, computed, effect, inject} from '@angular/core';
import { Chart } from 'chart.js/auto';
import { IDataLineChart } from '../../interfaces/data-chart.interface';
import { ChartJsService } from '../../services/chart-js.service';

@Component({
  selector: 'app-chart-line',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './chart-line.component.html',
  styleUrl: './chart-line.component.scss'
})
export class ChartLineComponent implements OnInit {
  private chartService = inject(ChartJsService)

  chart: Chart
  @Input({required: true}) data: IDataLineChart

  ngOnInit(): void {
    this.chartService.data = this.data
    this.chartService.createChart('MyChart')
    this.chart = this.chartService.chart
  }

}
