import { Component, WritableSignal, effect, inject } from '@angular/core';
import { AnalyticService } from '../../../../../../../shared/services/analytic.service';
import { IStatItem } from '../../../../../../../shared/interfaces/stat-item.interface';
import { CommonModule } from '@angular/common';
import { CardAnalyticComponent } from '../../../../../../../shared/components/card-analytic/card-analytic.component';
import { ChartLineComponent } from '../../../../../../../shared/components/chart-line/chart-line.component';
import { IDataLineChart } from '../../../../../../../shared/interfaces/data-chart.interface';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-report-item',
  standalone: true,
  imports: [
    CommonModule,
    CardAnalyticComponent,
    ChartLineComponent
  ],
  templateUrl: './report-item.component.html',
  styleUrl: './report-item.component.scss'
})
export class ReportItemComponent {
  private analyticService = inject(AnalyticService)
  cardItems: WritableSignal<IStatItem[]> = this.analyticService.reportItems
  reportChartValues: WritableSignal<IDataLineChart> = this.analyticService.reportChartValues
}
