import { CommonModule } from '@angular/common';
import { Component, WritableSignal, signal } from '@angular/core';
import { BreadCrumbsComponent } from '../../../shared/components/bread-crumbs/bread-crumbs.component';
import { IItem } from '../../../shared/interfaces/item.interface';
import { StatSectionComponent } from '../../components/calendar/stat-section/stat-section.component';
import { AgendaSectionComponent } from '../../components/agenda-section/agenda-section.component';
import { OverviewSectionComponent } from '../../components/overview-section/overview-section.component';
import { OnlineUserSectionComponent } from '../../components/online-user-section/online-user-section.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    BreadCrumbsComponent,
    StatSectionComponent,
    AgendaSectionComponent,
    OverviewSectionComponent,
    OnlineUserSectionComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  crumbs: WritableSignal<IItem[]> = signal<IItem[]>([
    {id: 1, label: 'Dashboard', icon: 'dashboard'},
    {id: 1, label: 'Admin'}
  ])

}
