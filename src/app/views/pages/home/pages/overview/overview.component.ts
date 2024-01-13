import { Component, OnInit, Signal, WritableSignal, computed, signal } from '@angular/core';
import { INavItem } from '../../../../../shared/interfaces/nav-item.interface';
import { CommonModule } from '@angular/common';
import { EventItemsComponent } from './pages/event-items/event-items.component';
import { TaskItemsComponent } from './pages/task-items/task-items.component';
import { CategItemsComponent } from './pages/categ-items/categ-items.component';
import { PlaceItemsComponent } from './pages/place-items/place-items.component';
import { UserItemsComponent } from './pages/user-items/user-items.component';

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
    this.itemActive = computed(() => {
      return this.navItems().filter(item => item.active === true)[0]
    })
  }

  onActive(item: INavItem) {
    this.navItems.update(values => values.map(value => {
        if(value == item) value.active = true
        else value.active = false
        return value
    }))
  }
}
