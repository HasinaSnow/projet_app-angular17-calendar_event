import { Component, OnInit, Signal, WritableSignal, computed, inject, signal } from '@angular/core';
import { INavItem } from '../../../../../shared/interfaces/nav-item.interface';
import { CommonModule } from '@angular/common';
import { EventItemsComponent } from './pages/event-items/event-items.component';
import { TaskItemsComponent } from './pages/task-items/task-items.component';
import { CategItemsComponent } from './pages/categ-items/categ-items.component';
import { PlaceItemsComponent } from './pages/place-items/place-items.component';
import { UserItemsComponent } from './pages/user-items/user-items.component';
import { ItemService } from '../../../../../shared/services/item.service';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    CommonModule,
    EventItemsComponent,
    TaskItemsComponent,
    CategItemsComponent, 
    PlaceItemsComponent,
    UserItemsComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent implements OnInit {
  private itemService = inject(ItemService)

  itemActive: Signal<INavItem>
  navItems: WritableSignal<INavItem[]> = signal([
    {
      label: 'Events',
      icon: 'emoji_events',
      new: true,
      active: true
    },
    {
      label: 'Tasks',
      icon: 'task',
      new: false,
      active: false
    },
    {
      label: 'Categories',
      icon: 'category',
      new: true,
      active: false
    },
    {
      label: 'Locations',
      icon: 'location_on',
      new: false,
      active: false
    },
    {
      label: 'Members',
      icon: 'group',
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
}
