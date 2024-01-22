import { Component, OnInit, Signal, WritableSignal, inject, signal } from '@angular/core';
import { INavItem } from '../../../../../shared/interfaces/nav-item.interface';
import { ItemService } from '../../../../../shared/services/item.service';
import { CommonModule } from '@angular/common';
import { ReportItemComponent } from './pages/report-item/report-item.component';
import { AssetItemComponent } from './pages/asset-item/asset-item.component';
import { DropdownComponent } from '../../../../../shared/components/dropdown/dropdown.component';
import { AnalyticService } from '../../../../../shared/services/analytic.service';
import { IItem } from '../../../../../shared/interfaces/item.interface';
import { FilterService } from '../../../../../shared/services/filter.service';

@Component({
  selector: 'app-analytic',
  standalone: true,
  imports: [
    CommonModule,
    DropdownComponent,
    ReportItemComponent,
    AssetItemComponent
  ],
  templateUrl: './analytic.component.html',
  styleUrl: './analytic.component.scss'
})
export class AnalyticComponent implements OnInit{
  private itemService = inject(ItemService)
  private analyticService = inject(AnalyticService)

  filterItems: IItem[] = inject(FilterService).filterDateItems
  itemActive: Signal<INavItem>
  navItems: WritableSignal<INavItem[]> = signal([
    {
      label: 'Reports',
      icon: 'donut_small',
      new: true,
      active: true
    },
    {
      label: 'Assets',
      icon: 'account_balance',
      new: false,
      active: false
    }
  ])

  ngOnInit(): void {
    this.itemActive = this.itemService.computeItemActive(this.navItems)
  }

  onActive(item: INavItem) {
    this.itemService.activeItem(this.navItems, item)
  }

  onFilterValue(item: IItem) {
    this.analyticService.changeFilter(item)
  }
}
