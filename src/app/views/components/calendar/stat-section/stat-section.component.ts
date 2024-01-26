import { CommonModule } from '@angular/common';
import { Component, WritableSignal, inject, signal } from '@angular/core';
import { SwitchBtnsComponent } from '../../../../shared/components/switch-btns/switch-btns.component';
import { IItem } from '../../../../shared/interfaces/item.interface';
import { ReportItemComponent } from '../../../pages/home/pages/analytic/pages/report-item/report-item.component';
import { AssetItemComponent } from '../../../pages/home/pages/analytic/pages/asset-item/asset-item.component';
import { DropdownComponent } from '../../../../shared/components/dropdown/dropdown.component';
import { FilterService } from '../../../../shared/services/filter.service';
import { AnalyticService } from '../../../../shared/services/analytic.service';

@Component({
  selector: 'app-stat-section',
  standalone: true,
  imports: [
    CommonModule,
    SwitchBtnsComponent,
    AssetItemComponent,
    ReportItemComponent,
    DropdownComponent
  ],
  templateUrl: './stat-section.component.html',
  styleUrl: './stat-section.component.scss'
})
export class StatSectionComponent {

  private analyticService = inject(AnalyticService)

  switchBtns: IItem[] = this.analyticService.switchBtns
  itemSwitched: WritableSignal<IItem> = this.analyticService.itemSwitched

  // filter dropdown
  filterStats: IItem[] = inject(FilterService).filterDateItems

  onSwitchBtn(item: IItem) {
    this.analyticService.switchItem(item)
  }

  onChangeFilter(item: IItem) {
    this.analyticService.changeFilter(item)
  }

}
