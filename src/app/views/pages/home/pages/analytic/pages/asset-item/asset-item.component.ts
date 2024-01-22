import { CommonModule } from '@angular/common';
import { Component, WritableSignal, inject } from '@angular/core';
import { CardAnalyticComponent } from '../../../../../../../shared/components/card-analytic/card-analytic.component';
import { IStatItem } from '../../../../../../../shared/interfaces/stat-item.interface';
import { AnalyticService } from '../../../../../../../shared/services/analytic.service';
import { ChartLineComponent } from '../../../../../../../shared/components/chart-line/chart-line.component';
import { IDataChart } from '../../../../../../../shared/interfaces/data-chart.interface';

@Component({
  selector: 'app-asset-item',
  standalone: true,
  imports: [
    CommonModule,
    CardAnalyticComponent,
    ChartLineComponent
  ],
  templateUrl: './asset-item.component.html',
  styleUrl: './asset-item.component.scss'
})
export class AssetItemComponent {
  private analyticService = inject(AnalyticService)
  cardItems: WritableSignal<IStatItem[]> = this.analyticService.assetItems
  assetChartValues: WritableSignal<IDataChart[]> = this.analyticService.assetChartValues

}
