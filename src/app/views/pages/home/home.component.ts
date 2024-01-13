import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { EventItemsComponent } from './pages/overview/pages/event-items/event-items.component';
import { TaskItemsComponent } from './pages/overview/pages/task-items/task-items.component';
import { CategItemsComponent } from './pages/overview/pages/categ-items/categ-items.component';
import { PlaceItemsComponent } from './pages/overview/pages/place-items/place-items.component';
import { UserItemsComponent } from './pages/overview/pages/user-items/user-items.component';
import { RouterOutlet } from '@angular/router';
import { INavItem } from '../../../shared/interfaces/nav-item.interface';
import { HeaderService } from '../../../shared/services/header.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    EventItemsComponent,
    TaskItemsComponent,
    CategItemsComponent,
    PlaceItemsComponent,
    UserItemsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private headerService = inject(HeaderService)

  ngOnInit() {
    this.headerService.headerNavItem.set([
      {
        label: 'Overview',
        icon: 'dashboard',
        url: '/home/overview'
      },
      {
        label: 'Analytics',
        icon: 'analytics',
        url: '/home/analytics'
      },
      {
        label: 'Journal',
        icon: 'book',
        url: '/home/journal'
      }
    ])
  }
}
